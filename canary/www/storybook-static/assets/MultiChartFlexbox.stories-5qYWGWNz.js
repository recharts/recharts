import{e}from"./iframe-CT4QuQ5L.js";import{A as r}from"./AreaChart-DG43VIsU.js";import{R as n}from"./arrayEqualityCheck-CUEtHgfA.js";import{C as o}from"./CartesianGrid-B5eEZuRf.js";import{X as m}from"./XAxis-DHcCUjsJ.js";import{Y as i}from"./YAxis-BZSCjBeJ.js";import{A as l}from"./Area-D6dJ755x.js";import{T as s}from"./Tooltip-D4I9rTHE.js";import{R as f}from"./RechartsHookInspector-lcTlhUAW.js";import{L as E}from"./LineChart-BO50I-pJ.js";import{L as x}from"./Line-DZ2dCTzj.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dw0rEgTJ.js";import"./hooks-CidIT9Ht.js";import"./axisSelectors-DlMKUcSY.js";import"./zIndexSlice-BbZ3gLFC.js";import"./resolveDefaultProps-CTWHIHtK.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-ChOeo1co.js";import"./chartDataContext-BO8jZHln.js";import"./CategoricalChart-DmUQY6Sd.js";import"./CartesianAxis-ByfjT7H_.js";import"./Layer-BIxjtyeO.js";import"./Text-ZzNZJtBS.js";import"./DOMUtils-CDXEyiOj.js";import"./Label-CFlrJOC9.js";import"./ZIndexLayer-B4whtcRw.js";import"./types-CGMRlxY8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-CwfbqPR9.js";import"./ReactUtils-BD8G1aYb.js";import"./ActivePoints-5c917mHb.js";import"./Dot-COXd4F6H.js";import"./RegisterGraphicalItemId-CxRMjxHS.js";import"./GraphicalItemClipPath-BaTdDRki.js";import"./SetGraphicalItem-BrCNGFd6.js";import"./useAnimationId-ByA7rgvy.js";import"./getRadiusAndStrokeWidthFromDot-dH9jVCiW.js";import"./graphicalItemSelectors-DImgMeQP.js";import"./useElementOffset-B6r2EuKs.js";import"./iteratee-BP4C4rB0.js";import"./Cross-CDfR4P6Z.js";import"./Rectangle-BJlDY3Tg.js";import"./Sector-BFKxB58R.js";import"./index-DDx2nU6r.js";import"./ChartSizeDimensions-71uSM08s.js";import"./OffsetShower-bHCqATCI.js";import"./PlotAreaShower-DYHCw4lK.js";import"./ErrorBarContext-DQ9IsJoH.js";import"./ActiveShapeUtils-Pkd70I7I.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-C3eKH3hP.js";import"./Symbols-NgG1d1Uj.js";const Ce={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null))),e.createElement(n,{className:"flex-child"},e.createElement(E,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
              <RechartsHookInspector />
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
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var u,g,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
                <RechartsHookInspector />
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
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const Ae=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,Ae as __namedExportsOrder,Ce as default};
