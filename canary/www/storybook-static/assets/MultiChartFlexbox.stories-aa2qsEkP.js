import{R as e}from"./iframe-BLYaiTCo.js";import{A as r}from"./AreaChart-ORRyYDVy.js";import{R as n}from"./zIndexSlice-lQffsUG8.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-BCnvYhH-.js";import{X as i}from"./XAxis-B1NcdzKW.js";import{Y as m}from"./YAxis-ryWccSzT.js";import{A as l}from"./Area-CPnuBwYN.js";import{T as s}from"./Tooltip-wFSg0E6n.js";import{L as f}from"./LineChart-DG-yzeX5.js";import{L as x}from"./Line-DaU6l3CY.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DuKK4DBL.js";import"./index-CCG5587O.js";import"./index-RDG97xsP.js";import"./index-DnQ-U2Qg.js";import"./index-BI_7Ub3B.js";import"./immer-ILyg-GW3.js";import"./get-C6fkE9tv.js";import"./renderedTicksSlice-kJn42Rl8.js";import"./axisSelectors-D6Dyr_Wd.js";import"./d3-scale-B2LK6XqV.js";import"./resolveDefaultProps-DpWzBvps.js";import"./isWellBehavedNumber-BqumoSwm.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C6NG5vyr.js";import"./chartDataContext-Bb8xEPvd.js";import"./CategoricalChart-CQ3ECWGQ.js";import"./CartesianAxis-D8ReKkO7.js";import"./Layer-Cjsn70fL.js";import"./Text-OjYntAZR.js";import"./DOMUtils-CIYC9pgo.js";import"./Label-BDDWEbHy.js";import"./ZIndexLayer-BDdQieuE.js";import"./types-B8ff9nYs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-LYPYqGuf.js";import"./useAnimationId-e0tJBS7c.js";import"./ActivePoints-BabG5O7K.js";import"./Dot-BrwJ_7NM.js";import"./RegisterGraphicalItemId-C8Ak7Vaq.js";import"./GraphicalItemClipPath-D0PBT0ws.js";import"./SetGraphicalItem-DCGW6Zln.js";import"./getRadiusAndStrokeWidthFromDot-LiorCCqR.js";import"./ActiveShapeUtils-B7KxHmGn.js";import"./Curve-DeQy-y-t.js";import"./step-BTBSj6ja.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-7Wfrp7_u.js";import"./useElementOffset-Cl_EM_xR.js";import"./uniqBy-DSvlr4Gg.js";import"./iteratee-7NILAXQu.js";import"./Cross-C7PiT0X4.js";import"./Rectangle-D-pvWCLO.js";import"./util-Dxo8gN5i.js";import"./Sector-Ca5VXyj7.js";import"./ErrorBarContext-B1uz4CKa.js";const Re={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
