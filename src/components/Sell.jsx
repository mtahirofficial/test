import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, FormGroup, Row, Col, Container, CustomInput } from 'reactstrap';
import classnames from 'classnames';
import { Form, Input } from 'reactstrap';
import CustomButton from './Buttons';
import { faArrowRight, faCamera, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { connect } from 'react-redux';
import { savePost } from '../store/actions/Actions';
import firebase from '../config/firebase/firebase'

const post = {}
// const post = { 
//   category: '',
//   subCategory: '',
//   company: '',
//   condition: '',
//   title: '',
//   description: '',
//   price: '',
//   imageUrl: '',
//   state: '',
//   city: '',
//   mobile: '',
//   whatsapp: ''
//  }
const Sell = (props) => {
  const [activeTab, setActiveTab] = useState('1');
  const [subCat_, setSubCat_] = useState('')
  // const [check, setCheck] = useState(false)
  
  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  const formStyle = { width: '100%', minHeight:'248px', border: '1px solid #CCD5D6' }

  const tabStyle = {
    cursor: 'pointer',
    colo: '#138496'
  }
  
  const Categories = [ 'Mobiles', 'Vehicles', 'Property', 'Electronics', 'Bikes', 'Animals', 'Furniture', 'Books', 'Kids', 'Sports' ]
  let mainCat = Categories.map((category, index) => { // main category map function line number 237
    return <option key={index} value={category} >{category}</option>
    }
  )
  
  const SubCategories = {
    Mobiles:['Tablets','Accessories','Mobile Phones'],
    Vehicles:['Cars','Busses','Vans','Trucks','Rikshaw'],
    Property:['Land and Plots','Houses','Shops'],
    Electronics :['Computers and Accessories','TV - Video - Audio','Cameras','AC','Fridge','Washing Machines'],
    Bikes:['Motor cycles','Bicycles'],
    Animals:['Cats','Dogs','Hourses','Birds'],
    Furniture:['Sofa','Chairs','Beds','Tables','Mirrors'],
    Books:['Books', 'Magzines'],
    Kids:['Toys','Prams and Walkers','Kids Bikes'],
    Sports:['Sports Equipments']
  }

  const tabTypes = ["Apple", "Danny Tabs", "Q Tabs", "Samsung", "Other Tablets"]
  const accessoriesTypes = ["Mobolie", "Tablets"]
  const mobileCompanies = ['Apple', 'Huawei', 'Infinix', 'Nokia', 'OPPO', 'QMobile', 'Samsung', 'Tecno', 'Vivo', 'Xiaomi']
  const carCompnaies = ["Audi", "BMW", "Honda", "KIA", "Nisan", "Sozuki", "Toyota", "RAnge Rover"]
  const fuel = ["CNG", "Diesel", "Hybrid", "LPG", "Petrol"]
  const landType = ["Agriculture Land", "Commercial Plots", "Files", "Industrial Lands", "Residetial Plots"]
  const areaUnit = ["Kanal", "Marla", "Square Feet", "Square Meter", "Square Yards"]
  const furnished = ["Yes", "No"]
  const shopType = ["Office", "Shop", "Warehouse", "Factory", "Building"]
  const applianceType = ["Computer", "Hard Disk", "Internet", "Laptops", "Monitors", "Printers", "Others"]
  const videoType = ["TV", "Video-Audio"]
  const cameraTypes = ["Cameras", "Lens", "Other accessories"]
  const bikeCompanies  =["Honda", "KaWasaki", "Road Prince", "Suzuki", "United", "VESPA", "Yamaha", "Eagle", "Crown"]
  const dogTypes = ["Beagle", "Boxer", "Bulldog", "Pug", "Russian", "Other Breeds"]
  const bookType = ["Education", "Training", "Literature", "Fiction", "Professional", "Other Books"]
  const cities = ["Faisalabad", "Lahore", "Islamabad", "Karachi", "Multan", "Sukkur", "Abottabad", "Peshawar", "Hyderabad", "Okara", "Quetta", "Rahim Yar Khan", "Sargodha", "Sahiwal", "Wazirbad"]
  const states = ['Azad Kashmir', 'Balochistan', 'Islamabad', 'Khyber Pakhtunkhwah', 'Nothern Areas', 'Punjab', 'Sindh']

  const handleCategory = (e) => {
        post.category = e.target.value
        let subCat;
        if(
          post.category !== 'default'
        ){
          subCat = SubCategories[post.category].map((value, key) => { // subcategory map function line number 242
          return <option key={key} value={value}>{value}</option>
            }
            ) 
            setSubCat_(subCat)
          } else {
            subCat = ""
            setSubCat_(subCat)
        }
  }
  const handleSubCategory = (e) => post.subCategory = e.target.value
  const handleCompany = (e) => post.company = e.target.value
  const handleType = (e) => post.type = e.target.value
  const handleFuel = (e) => post.fuel = e.target.value
  const handleRegistered = (e) => post.registeredIn = e.target.value
  const handleAreaUnit = (e) => post.areaUnit = e.target.value
  const handleArea = (e) => post.area = e.target.value
  const handleFurnished = (e) => post.furnished = e.target.value
  const handleCondition = (e) => post.condition = e.target.value
  const handleTitle = (e) => post.title = e.target.value
  const handleDescription = (e) => post.description = e.target.value
  const handlePrice = (e) => post.price = e.target.value
  const handleImageUrl = (e) => post.imgUrl = e.target.value
  const handleState = (e) => post.state = e.target.value
  const handleCity = (e) => post.city = e.target.value
  const handleMobile = (e) => post.mobile = e.target.value
  const handleWhatsapp = (e) => post.whatsapp = e.target.value
  const goToNext = () => {
    if(
      activeTab === '1'
    ){
      
      if(
        post.category !== 'default' && post.category !== '' && post.subCategory !== 'default' && post.subCategory !== ''
        ){
        toggle((parseInt(activeTab) + 1).toString())
      } else {
        alert('Select Category')
      }
    } else if(
      activeTab === '2'
    ){
      if(
        post.company !== 'default' && post.condition !== 'default' && post.title !== '' && post.description !== ''
      ){
        toggle((parseInt(activeTab) + 1).toString())
      } else {
        alert('Enter details')
      }
    } else if (
      activeTab === '3'
    ){
      if(
        post.price !== '' 
      ){
        toggle((parseInt(activeTab) + 1).toString())
      } else {
        alert('Enter price')
      }

    } else if (
      activeTab === '4'
    ){
      if(
        post.imgUrl !== ''
      ){
        toggle((parseInt(activeTab) + 1).toString())
      } else {
        alert('Select cover image')
      }
    } else if (
      activeTab === '5'
    ){
      if(
        post.state !== 'default' && post.city !== ''
      ){
        toggle((parseInt(activeTab) + 1).toString())
      } else {
        alert('Select your location')
      }

    } else if (
      activeTab === '6'
    ){
      if(
        post.mobile !== '' && post.whatsapp !== ''
      ){
        PostNow()
      } else {
        alert('Enter your contact')
      }

    } else {
      alert('Invalid input')

    }
  }
  const PostNow = () => {
    post.userName = props.user.displayName
    post.addID = "add_ID"
    console.log(post.userName)
    // firebase.database().ref('/posts/' + post.category + "/" + post.subCategory + "/" + post.userName + "/"  ).set(post)
    // props.changeStateToReducer(post)
  }
return (
  <Container>
    <Nav tabs>
      <NavItem>
        <NavLink
          className={classnames({ active: activeTab === '1' })}
          onClick={() => { toggle('1'); }}
          style={tabStyle}
          // disabled={true}
        >
          Category
        </NavLink>
      </NavItem>
      <NavItem>
      <NavLink
      className={classnames({ active: activeTab === '2' })}
      onClick={() => { toggle('2'); }}
      style={tabStyle}
      // disabled={true}
      >
      Details
      </NavLink>
      </NavItem>
      <NavItem>
      <NavLink
      className={classnames({ active: activeTab === '3' })}
      onClick={() => { toggle('3'); }}
      style={tabStyle}
      // disabled={true}
      >
      Price
      </NavLink>
      </NavItem>
      <NavItem>
      <NavLink
      className={classnames({ active: activeTab === '4' })}
      onClick={() => { toggle('4'); }}
      style={tabStyle}
      // disabled={true}
      >
      Images
      </NavLink>
      </NavItem>
      <NavItem>
      <NavLink
      className={classnames({ active: activeTab === '5' })}
      onClick={() => { toggle('5'); }}
      style={tabStyle}
      // disabled={true}
      >
      Location
      </NavLink>
      </NavItem>
      <NavItem>
    <NavLink
    className={classnames({ active: activeTab === '6' })}
    onClick={() => { toggle('6'); }}
    style={tabStyle}
    // disabled={true}
    >
    Contact
    </NavLink>
    </NavItem>
    </Nav>
    <TabContent activeTab={activeTab}>
      <TabPane tabId="1">
      <Row>
      <Col sm="12">
      <h4 className='mt-3 mb-3'>Choose Category</h4>
        <Form style={formStyle} >
            <Input onChange={handleCategory} style={{width: '95%'}} className='m-3' type="select" name='categories' bsSize="lg">
                <option value='default' >Choose Category</option>
                { mainCat } 
                {/* Main categories line number 26 */}
            </Input>
            <Input onChange={handleSubCategory} style={{width: '95%'}} className='m-3' type="select" name='subCategories' bsSize="lg">
                <option value='default' >Choose Sub Category</option>
                { subCat_ }
                {/* sub categories line number 54 */}
            </Input>
            <Row>
                <Col xs='12' md={{ size: 2, offset: 5 }} >
                    <CustomButton color='info' text='Next' icon={faArrowRight} handleClick={goToNext} btnStyle={{width: '100%' }} />
                    {/* , cursor: 'pointer', pointerEvents: 'none' */}
                </Col>
            </Row>
        </Form>
      </Col>
      </Row>
      </TabPane>
      <TabPane tabId="2">
      <Row>
      <Col sm="12">
      <h4 className='mt-3 mb-3'>Details</h4>
      <Form  style={formStyle}>
        {
          post.subCategory === "Mobile Phones" 
          ?
          <Input onChange={handleCompany} style={{width: '95%'}} className='m-3' type="select" name='categories' bsSize="lg">
            <option value='default' >Company</option>
            { mobileCompanies.map(
                (company, index) => {
                    return <option key={index} value={company} >{company}</option>
                }
            )}
        </Input>
        : 
        post.subCategory === "Tablets" 
          ?
          <Input onChange={handleType} style={{width: '95%'}} className='m-3' type="select" name='categories' bsSize="lg">
            <option value='default' >Type</option>
            { tabTypes.map(
                (company, index) => {
                    return <option key={index} value={company} >{company}</option>
                }
            )}
        </Input>
        : 
        post.subCategory === "Accessories" 
          ?
          <Input onChange={handleType} style={{width: '95%'}} className='m-3' type="select" name='categories' bsSize="lg">
            <option value='default' >Type</option>
            { accessoriesTypes.map(
                (company, index) => {
                    return <option key={index} value={company} >{company}</option>
                }
            )}
        </Input>
        : 
        post.subCategory === "Cars" 
          ?
          <>
          <Input onChange={handleCompany} style={{width: '95%'}} className='m-3' type="select" name='categories' bsSize="lg">
            <option value='default' >Company</option>
            { carCompnaies.map(
                (company, index) => {
                    return <option key={index} value={company} >{company}</option>
                }
            )}
        </Input>
          <Input onChange={handleFuel} style={{width: '95%'}} className='m-3' type="select" name='categories' bsSize="lg">
              <option value='default' >Fuel</option>
              { fuel.map(
                  (company, index) => {
                      return <option key={index} value={company} >{company}</option>
                  }
              )}
          </Input>
          <Input onChange={handleRegistered} style={{width: '95%'}} className='m-3' type="select" name='categories' bsSize="lg">
              <option value='default' >Registered In</option>
              { cities.map(
                  (company, index) => {
                      return <option key={index} value={company} >{company}</option>
                  }
              )}
          </Input>
          </>
        : 
        post.subCategory === "Land and Plots" 
          ?
          <>
          <Input onChange={handleType} style={{width: '95%'}} className='m-3' type="select" name='categories' bsSize="lg">
            <option value='default' >Type</option>
            { landType.map(
                (company, index) => {
                    return <option key={index} value={company} >{company}</option>
                }
            )}
        </Input>
          <Input onChange={handleAreaUnit} style={{width: '95%'}} className='m-3' type="select" name='categories' bsSize="lg">
            <option value='default' >Area Unit</option>
            { areaUnit.map(
                (company, index) => {
                    return <option key={index} value={company} >{company}</option>
                }
            )}
        </Input>
          <Input onChange={handleArea} style={{width: '95%'}} className='m-3' type="text" name="area" placeholder='Enter Area' bsSize="lg" />
          </>
        : 
        post.subCategory === "Houses" 
          ?
          <>
          <Input onChange={handleFurnished} style={{width: '95%'}} className='m-3' type="select" name='categories' bsSize="lg">
            <option value='default' >Furnished</option>
            { furnished.map(
                (company, index) => {
                    return <option key={index} value={company} >{company}</option>
                }
            )}
        </Input>
          <Input onChange={handleAreaUnit} style={{width: '95%'}} className='m-3' type="select" name='categories' bsSize="lg">
              <option value='default' >Area Unit</option>
              { areaUnit.map(
                  (company, index) => {
                      return <option key={index} value={company} >{company}</option>
                  }
              )}
          </Input>
          <Input onChange={handleArea} style={{width: '95%'}} className='m-3' type="text" name="area" placeholder='Enter Area' bsSize="lg" />
          </>
        : 
        post.subCategory === "Shops" 
          ?
          <>
          <Input onChange={handleType} style={{width: '95%'}} className='m-3' type="select" name='categories' bsSize="lg">
            <option value='default' >Type</option>
            { shopType.map(
                (company, index) => {
                    return <option key={index} value={company} >{company}</option>
                }
            )}
        </Input>
          <Input onChange={handleAreaUnit} style={{width: '95%'}} className='m-3' type="select" name='categories' bsSize="lg">
            <option value='default' >Area Unit</option>
            { areaUnit.map(
                (company, index) => {
                    return <option key={index} value={company} >{company}</option>
                }
            )}
        </Input>
          <Input onChange={handleArea} style={{width: '95%'}} className='m-3' type="text" name="area" placeholder='Enter Area' bsSize="lg" />
          </>
        : 
        post.subCategory === "Computers and Accessories" 
          ?
          <Input onChange={handleType} style={{width: '95%'}} className='m-3' type="select" name='categories' bsSize="lg">
            <option value='default' >Type</option>
            { applianceType.map(
                (company, index) => {
                    return <option key={index} value={company} >{company}</option>
                }
            )}
        </Input>
        : 
        post.subCategory === "TV - Video - Audio" 
          ?
          <Input onChange={handleType} style={{width: '95%'}} className='m-3' type="select" name='categories' bsSize="lg">
            <option value='default' >Type</option>
            { videoType.map(
                (company, index) => {
                    return <option key={index} value={company} >{company}</option>
                }
            )}
        </Input>
        : 
        post.subCategory === "Cameras" 
          ?
          <Input onChange={handleType} style={{width: '95%'}} className='m-3' type="select" name='categories' bsSize="lg">
            <option value='default' >Type</option>
            { cameraTypes.map(
                (company, index) => {
                    return <option key={index} value={company} >{company}</option>
                }
            )}
        </Input>
        : 
        post.subCategory === "Motor cycles" 
          ?
          <Input onChange={handleCompany} style={{width: '95%'}} className='m-3' type="select" name='categories' bsSize="lg">
            <option value='default' >Company</option>
            { bikeCompanies.map(
                (company, index) => {
                    return <option key={index} value={company} >{company}</option>
                }
            )}
        </Input>
        : 
        post.subCategory === "Dogs" 
          ?
          <Input onChange={handleType} style={{width: '95%'}} className='m-3' type="select" name='categories' bsSize="lg">
            <option value='default' >Type</option>
            { dogTypes.map(
                (company, index) => {
                    return <option key={index} value={company} >{company}</option>
                }
            )}
        </Input>
        : 
        post.subCategory === "Books" || post.subCategory === "Magzines" 
          ?
          <Input onChange={handleType} style={{width: '95%'}} className='m-3' type="select" name='categories' bsSize="lg">
            <option value='default' >Type</option>
            { bookType.map(
                (company, index) => {
                    return <option key={index} value={company} >{company}</option>
                }
            )}
        </Input>
        : 
        <></>
        }
        
        <Input onChange={handleCondition} style={{width: '95%'}} className='m-3' type="select" name='categories' bsSize="lg">
            <option value='default' >Condition</option>
            <option value='New' >New</option>
            <option value='Old' >Old</option>
        </Input>
        <FormGroup>
            <Input onChange={handleTitle} style={{width: '95%'}} className='m-3' type="text" name="title" placeholder='Enter Title' bsSize="lg" />
        </FormGroup>
        <FormGroup>
            <Input onChange={handleDescription} type="textarea" name="description" placeholder='Write Description...' style={{width: '95%', height:'200px'}} className='m-3' bsSize="lg" />
        </FormGroup>
        <Row>
            <Col xs='12' md={{ size: 2, offset: 5 }} >
                <CustomButton color='info' text='Next' icon={faArrowRight} handleClick={goToNext} btnStyle={{width: '100%'}} />
            </Col>
        </Row>
      </Form>
      </Col>
      </Row>
      </TabPane>
      <TabPane tabId="3">
      <Row>
      <Col sm="12">
      <h4 className='mt-3 mb-3'>Set Price</h4>

      <Form  style={formStyle}>
        <FormGroup>
        <div className="input-group-prepend">
            <div className="input-group-text">Rs</div>
            <Input onChange={handlePrice} style={{width: '92%'}} className='m-3' type="number" name="price" placeholder='Enter price' bsSize="lg" />
        </div>
        </FormGroup>
        
        <Row>
            <Col xs='12' md={{ size: 2, offset: 5 }} >
                <CustomButton color='info' text='Next' icon={faArrowRight} handleClick={goToNext} btnStyle={{width: '100%'}} />
            </Col>
        </Row>
      </Form>
      </Col>
      </Row>
      </TabPane>
      <TabPane tabId="4">
      <Row>
      <Col sm="12">
      <h4 className='mt-3 mb-3'>Upload Image (Just 1 Image allowed)</h4>
      <Form  style={{width: '100%', minHeight:'248px', border: '1px solid #CCD5D6'}}>
        <FormGroup>
          <div className="input-group-prepend">
                <div className="input-group-text"><FontAwesomeIcon icon={faCamera} /></div>
                <CustomInput onChange={handleImageUrl} style={{width: '90%'}} id='' className='m-3' type="file" name="coverPicture" label="Yo, pick a picture of your product!" />
          </div>
        </FormGroup>
        <Row>
            <Col xs='12' md={{ size: 2, offset: 5 }} >
            <CustomButton color='info' text='Next' icon={faArrowRight} handleClick={goToNext} btnStyle={{width: '100%'}} />
            </Col>
        </Row>
      </Form>
      </Col>
      </Row>
      </TabPane>
      <TabPane tabId="5">
      <Row>
      <Col sm="12">
      <h4 className='mt-3 mb-3'>Location</h4>
      <Form  style={{width: '100%', minHeight:'248px', border: '1px solid #CCD5D6'}}>
        <Input onChange={handleState} style={{width: '95%'}} className='m-3' type="select" name='state' bsSize="lg">
            <option value='default' >State</option>
            { states.map(
                (company, index) => {
                    return <option key={index} value={company} >{company}</option>
                }
            )}
            
        </Input>
        <FormGroup>
        <Input onChange={handleCity} style={{width: '95%'}} className='m-3' type="select" name='city' bsSize="lg">
            <option value='default' >City</option>
            { cities.map(
                (company, index) => {
                    return <option key={index} value={company} >{company}</option>
                }
            )}
        </Input>
        </FormGroup>
        <Row>
            <Col xs='12' md={{ size: 2, offset: 5 }} >
            <CustomButton color='info' text='Next' icon={faArrowRight} handleClick={goToNext} btnStyle={{width: '100%'}} />
            </Col>
        </Row>
      </Form>
      </Col>
      </Row>
      </TabPane>
      <TabPane tabId="6">
    <Row>
    <Col sm="12">
    <h4 className='mt-3 mb-3'>Location</h4>
    <Form  style={{width: '100%', minHeight:'248px', border: '1px solid #CCD5D6'}}>
      <FormGroup>
        <div className="input-group-prepend">
              <div className="input-group-text"><FontAwesomeIcon icon={faPhone} /></div>
          <Input onChange={handleMobile} style={{width: '95%'}} className='m-3' type="text" name="mobile" placeholder='Mobile' bsSize="lg" />
        </div>
      </FormGroup>
      <FormGroup>
      <div className="input-group-prepend">
              <div className="input-group-text"><FontAwesomeIcon icon={faWhatsapp} /></div>
          <Input onChange={handleWhatsapp} style={{width: '95%'}} className='m-3' type="text" name="whatsapp" placeholder='Whatsapp' bsSize="lg" />
        </div>
      </FormGroup>
      <Row>
          <Col xs='12' md={{ size: 2, offset: 5 }} >
          <CustomButton color='info' text='Post Now' icon={faArrowRight} handleClick={goToNext} btnStyle={{width: '100%'}} />
          </Col>
      </Row>
    </Form>
    </Col>
    </Row>
    </TabPane>
    </TabContent>
    
  </Container>
  );
}

function mapDispatchToProps(dispatch) {
  return ({
      changeStateToReducer: (post) => {
          dispatch(savePost(post))
          // console.log(post)
      }
  })
}

function mapStateToProps(store){
  return (
    {
      post: store.postReducer[store.postReducer.length-1],
      user: store.userReducer.state
    }
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Sell);