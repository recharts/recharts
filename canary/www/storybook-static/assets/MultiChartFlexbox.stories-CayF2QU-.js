import{R as e}from"./iframe-DNYOsiJO.js";import{A as r}from"./AreaChart-rNAZ0GOT.js";import{R as n}from"./zIndexSlice-BYsyPOtl.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-CYh_vFtl.js";import{X as i}from"./XAxis-Dc7egqDj.js";import{Y as m}from"./YAxis-BYx3TtuN.js";import{A as l}from"./Area-ChAIQ71a.js";import{T as s}from"./Tooltip-B0pZWCVU.js";import{L as f}from"./LineChart-BGiKUXuB.js";import{L as x}from"./Line-R4OFP3LB.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D4XAWs0V.js";import"./index-BghJ0rJu.js";import"./index-DN5tCymc.js";import"./index-CpvOcg5A.js";import"./index-B-scg1za.js";import"./throttle-DhLz3mrQ.js";import"./get-DvCBXc2H.js";import"./renderedTicksSlice-B3G44Ect.js";import"./axisSelectors-BU0FKw5j.js";import"./d3-scale-Cm3hMOK_.js";import"./resolveDefaultProps-BPA_kNXr.js";import"./isWellBehavedNumber-BdiH4iwW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CJ0aqbjB.js";import"./chartDataContext-ALZLxkDM.js";import"./CategoricalChart-Dgn8q3Cx.js";import"./CartesianAxis-DB2jJ2Vg.js";import"./Layer-BZEyjxjb.js";import"./Text-COQ57Hvt.js";import"./DOMUtils-DMxex0QR.js";import"./Label-DBVLreiQ.js";import"./ZIndexLayer-B6YZY0_d.js";import"./types-CfyGDdUv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-CfNYG8xc.js";import"./useAnimationId-DniHu15m.js";import"./ActivePoints-B0cX4VGQ.js";import"./Dot-DPYiTUdf.js";import"./RegisterGraphicalItemId-PRQMqBjc.js";import"./GraphicalItemClipPath-C8T0qCgO.js";import"./SetGraphicalItem-DQ-8Rtbz.js";import"./getRadiusAndStrokeWidthFromDot-D7oiSawd.js";import"./ActiveShapeUtils-Dv5sca8G.js";import"./Curve-C7WD3Hug.js";import"./step-BkXisL-y.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BWLE6_sA.js";import"./useElementOffset-Cw6InSRv.js";import"./uniqBy-Dqcc81ao.js";import"./iteratee-BmMaIqc5.js";import"./Cross-CUFgV_gL.js";import"./Rectangle-D0fmCEGG.js";import"./util-Dxo8gN5i.js";import"./Sector-DgmjtNh6.js";import"./ErrorBarContext-8ntzOtYf.js";const Re={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
