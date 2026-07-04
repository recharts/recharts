import{R as e}from"./iframe-Cdy9NYu9.js";import{A as r}from"./AreaChart-DRC9zebj.js";import{R as n}from"./zIndexSlice-C2_e4Jbl.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-DKOeRVem.js";import{X as i}from"./XAxis-BJhS5a8e.js";import{Y as m}from"./YAxis-B-BKBDfM.js";import{A as l}from"./Area-DwtJU27a.js";import{T as s}from"./Tooltip-N88xWPck.js";import{L as f}from"./LineChart-BB6uvWNj.js";import{L as x}from"./Line-L0enbhhs.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D4IxCG7a.js";import"./index-Bcb8rKnp.js";import"./index-CaPeX6FT.js";import"./index-BZ9Fe99a.js";import"./index-DsFTIXEw.js";import"./throttle-t9dcJkBi.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DWXzhFAM.js";import"./axisSelectors-ByTu7Vcx.js";import"./resolveDefaultProps-CG6sO-97.js";import"./isWellBehavedNumber-CJulqOvD.js";import"./d3-scale-DTNVMcZf.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C4yHSY79.js";import"./chartDataContext-C2Y_0_Vz.js";import"./CategoricalChart-BucM35ky.js";import"./CartesianAxis-DA9B6fNW.js";import"./Layer-Hq_4dnpr.js";import"./Text-DMhYSqT7.js";import"./DOMUtils-DBN2rZ60.js";import"./Label-BIfqnFjj.js";import"./ZIndexLayer-BxN8McgO.js";import"./types-C9NSKw4l.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BSQ2aAGr.js";import"./useAnimationId-DO_gOZxo.js";import"./ActivePoints-MMq034Vb.js";import"./Dot-B4nh6ym9.js";import"./RegisterGraphicalItemId-WMzFziJE.js";import"./GraphicalItemClipPath-GIg3EkdR.js";import"./SetGraphicalItem-CgtgTGFl.js";import"./getRadiusAndStrokeWidthFromDot-BJvaJANi.js";import"./ActiveShapeUtils-CMZtEUn5.js";import"./Curve-CX0sCCUr.js";import"./step-Dtj-YZD0.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-ClwBgY3L.js";import"./useElementOffset-DysDxY94.js";import"./uniqBy-LvrlaU3A.js";import"./iteratee-bdNJUmyF.js";import"./Cross-DfwotlG2.js";import"./Rectangle-zLcbgT_c.js";import"./util-Dxo8gN5i.js";import"./Sector-CzJudC60.js";import"./ErrorBarContext-B4XuHyPg.js";const Re={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
