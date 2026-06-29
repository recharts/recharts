import{R as e}from"./iframe-CszBinxB.js";import{A as r}from"./AreaChart-DvVOtDsz.js";import{R as n}from"./zIndexSlice-CutJbhUL.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-DXxJFn4V.js";import{X as i}from"./XAxis-oYdZhs_K.js";import{Y as m}from"./YAxis-Dcemgb8R.js";import{A as l}from"./Area-Cszwodid.js";import{T as s}from"./Tooltip-D6DyKh1e.js";import{L as f}from"./LineChart-Cvnq87be.js";import{L as x}from"./Line-CF2pkJ7d.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B9WMJT6y.js";import"./index-CJ5FwB5R.js";import"./index-CqsgrxyY.js";import"./index-Dk3UIdqq.js";import"./index-CK8GAH5B.js";import"./throttle-D83-jpt2.js";import"./get-Dkt-pB45.js";import"./renderedTicksSlice-BApmRI5D.js";import"./axisSelectors-ChU_3Lvt.js";import"./d3-scale-8f-0eAbn.js";import"./resolveDefaultProps-Bibg6aom.js";import"./isWellBehavedNumber-CQgoIKii.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CKqsh66i.js";import"./chartDataContext-D1nSjPO9.js";import"./CategoricalChart-KozYfQM0.js";import"./CartesianAxis-BWqORJkK.js";import"./Layer-CbC5ZndY.js";import"./Text-BedxJwrY.js";import"./DOMUtils-BDWRPNb8.js";import"./Label-Dp0h3UHP.js";import"./ZIndexLayer-BWnK9pgn.js";import"./types-BcRZVSBA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-dM5mhDfD.js";import"./useAnimationId-DACL8E3O.js";import"./ActivePoints-D0tv5d-k.js";import"./Dot-D-4kDITN.js";import"./RegisterGraphicalItemId-BWZQesOM.js";import"./GraphicalItemClipPath-BrN2bI9m.js";import"./SetGraphicalItem-DWL3HNya.js";import"./getRadiusAndStrokeWidthFromDot-DQWqw49n.js";import"./ActiveShapeUtils-BBAZWV6w.js";import"./Curve-BU7ZSeTV.js";import"./step-F1REG5Zy.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-Bl27Wn5K.js";import"./useElementOffset-BXwdlwFe.js";import"./uniqBy-BCYeHSUY.js";import"./iteratee-zMs8qLuf.js";import"./Cross-Djz1b2yT.js";import"./Rectangle-3wzUTOWc.js";import"./util-Dxo8gN5i.js";import"./Sector-QnOONA2W.js";import"./ErrorBarContext--gRpVtKO.js";const Re={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <>
        <p>Resize the window to test ResponsiveContainer</p>
        <div className="flex-parent">
          <ResponsiveContainer width="100%" className="flex-child">
            <AreaChart data={pageData} margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
          <ResponsiveContainer className="flex-child">
            <LineChart data={pageData} margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Line type="monotone" dataKey="amt" stroke="orange" />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </>;
  },
  args: {}
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var g,u,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const data = [{
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400
    }, {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210
    }, {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290
    }, {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000
    }, {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181
    }, {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500
    }, {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100
    }];
    return <div style={{
      height: '100%',
      width: '100%',
      margin: 0
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'row',
        height: '200px'
      }}>
          <div style={{
          flex: 1
        }}>
            <ResponsiveContainer>
              <AreaChart data={data} margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                <Tooltip />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div style={{
          flex: 1
        }}>
            <ResponsiveContainer>
              <AreaChart data={data} margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                <Tooltip />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>;
  }
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const ke=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,ke as __namedExportsOrder,Re as default};
