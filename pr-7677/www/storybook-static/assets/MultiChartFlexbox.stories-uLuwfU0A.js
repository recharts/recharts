import{R as e}from"./iframe-DVtjH5ZC.js";import{A as r}from"./AreaChart-Ot81I2Vt.js";import{R as o}from"./zIndexSlice-CT5rKc6V.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CVAPsQVq.js";import{X as i}from"./XAxis-jQ3mwiM2.js";import{Y as m}from"./YAxis-B5n5P7NC.js";import{A as s}from"./Area-MXY7tkB2.js";import{T as p}from"./Tooltip-Kl_3CgqO.js";import{L as f}from"./LineChart-BMqNprZF.js";import{L as x}from"./Line-CCpZ7Nx1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-UF711Qsb.js";import"./index-WzbbmlbG.js";import"./index-Dy7HbM4f.js";import"./index-DA6wIi6Z.js";import"./index-fmYZM9xu.js";import"./throttle-CXnXR6c-.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CCCeYC9z.js";import"./resolveDefaultProps-CEFHSu3W.js";import"./isWellBehavedNumber-CxtTyBKU.js";import"./d3-scale-DlNy7vWv.js";import"./renderedTicksSlice-P35kIKoD.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C3qyBmwB.js";import"./chartDataContext-C1lTg_Bk.js";import"./CategoricalChart-CCltYxzM.js";import"./CartesianAxis-MYuvHf2c.js";import"./Layer-CJUEZ1CI.js";import"./Text-DwaUpb0m.js";import"./DOMUtils-Dd9Mj9i5.js";import"./useId-uEfLXIRi.js";import"./useBackwardsCompatibleTheme-9zZd94Fp.js";import"./Label-CW5Nfot0.js";import"./ZIndexLayer-AEwL3kC6.js";import"./types-BYtifQxH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-rgrg930R.js";import"./useAnimationId-byXPA3hL.js";import"./ActivePoints-DSobnptb.js";import"./Dot-v10q4iwn.js";import"./RegisterGraphicalItemId-CGQFc64E.js";import"./GraphicalItemClipPath-CFsYcU3O.js";import"./SetGraphicalItem-DVUS6WUr.js";import"./getRadiusAndStrokeWidthFromDot-DVbQTreU.js";import"./ActiveShapeUtils-BGtP_9iK.js";import"./Curve-CxVQkJLl.js";import"./step-h8OzX5q7.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-VgLc6JAx.js";import"./useElementOffset-DhnL9i8I.js";import"./uniqBy-lLim1SQG.js";import"./iteratee-DPVBHhbI.js";import"./Cross-w2H0kF5t.js";import"./Rectangle-x3uoudl5.js";import"./util-Dxo8gN5i.js";import"./Sector-DZV2I517.js";import"./ErrorBarContext-gvSK-T7w.js";const Pe={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(o,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))),e.createElement(o,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(p,null))))),args:{}},a={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null)))),e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const be=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,be as __namedExportsOrder,Pe as default};
