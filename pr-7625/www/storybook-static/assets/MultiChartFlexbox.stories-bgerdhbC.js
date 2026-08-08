import{R as e}from"./iframe-3VVC0EYx.js";import{A as r}from"./AreaChart-CmMzqdS1.js";import{R as o}from"./zIndexSlice-C9c9QQWy.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BTUT72i6.js";import{X as i}from"./XAxis-b3cnYQsk.js";import{Y as m}from"./YAxis-CQsWrDlS.js";import{A as s}from"./Area-Bks2IVw5.js";import{T as p}from"./Tooltip-Be1HZ_vQ.js";import{L as f}from"./LineChart-BeiEbz0B.js";import{L as x}from"./Line-CPqvnRUF.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cu7UZSGV.js";import"./index-D9g8mJB5.js";import"./index-CufvXBKU.js";import"./index-dUhqMgMz.js";import"./index-C9Se9_4o.js";import"./throttle-CNUd1gZq.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B7dqcVa4.js";import"./resolveDefaultProps-DJCePyCz.js";import"./isWellBehavedNumber-D8cUYDpZ.js";import"./d3-scale-CshH80dj.js";import"./renderedTicksSlice-D0fiht4g.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B55un86Y.js";import"./chartDataContext-ylnzbaG8.js";import"./CategoricalChart-DbawHDOk.js";import"./CartesianAxis-DBlrGcdR.js";import"./Layer-BVcdrpr1.js";import"./Text-DxD-h55l.js";import"./DOMUtils-jlGUgeWT.js";import"./Label-B_1XKNb_.js";import"./ZIndexLayer-DAQTkU_L.js";import"./types-Bwo4GPNk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-5aynFYgW.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BDqZZjDt.js";import"./useAnimationId-D9vHT7-j.js";import"./ActivePoints-BpwW4_4p.js";import"./Dot-DAIotGMm.js";import"./RegisterGraphicalItemId-CNwWR-CS.js";import"./GraphicalItemClipPath-t0-9VWN4.js";import"./SetGraphicalItem-C2V0lGXl.js";import"./getRadiusAndStrokeWidthFromDot-BuIM6rGB.js";import"./ActiveShapeUtils-BH_C9PRa.js";import"./Curve-BpqmVEGV.js";import"./step-JaBbtSkB.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-UFpF-OvU.js";import"./useElementOffset-Cu87sVLj.js";import"./uniqBy-DrTOg_85.js";import"./iteratee-DVGMM3Q6.js";import"./Cross-BlbAAcaI.js";import"./Rectangle-DGTf0ga1.js";import"./util-Dxo8gN5i.js";import"./Sector-0FWNGdlH.js";import"./ErrorBarContext-B62Uz1n4.js";const De={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(o,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))),e.createElement(o,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(p,null))))),args:{}},a={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null)))),e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const Pe=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,Pe as __namedExportsOrder,De as default};
