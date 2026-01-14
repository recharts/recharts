import{e}from"./iframe-0lTGunMW.js";import{A as r}from"./AreaChart-B6dIUoAM.js";import{R as n}from"./arrayEqualityCheck-BcVHM6kB.js";import{C as o}from"./CartesianGrid-C3bTOkY1.js";import{X as m}from"./XAxis-Cfcoth7C.js";import{Y as i}from"./YAxis-lXYEyZz1.js";import{A as l}from"./Area-CgEX-kBB.js";import{T as s}from"./Tooltip-D5BWDrFR.js";import{R as f}from"./RechartsHookInspector-Dk1C8jj5.js";import{L as E}from"./LineChart-B8KRFZdY.js";import{L as x}from"./Line-DQI75P2i.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CnzobKYl.js";import"./hooks-CXPWyfRe.js";import"./axisSelectors-Djz2yXUi.js";import"./zIndexSlice-D-YSqdMJ.js";import"./resolveDefaultProps-Hv7UJc4Y.js";import"./PolarUtils-mWliNy-S.js";import"./CartesianChart-CMMpVnoF.js";import"./chartDataContext-Cyqtlzkq.js";import"./CategoricalChart-CV-slYuT.js";import"./CartesianAxis-Co_LHUOm.js";import"./Layer-BnXp22uo.js";import"./Text-bhqNXfXh.js";import"./DOMUtils-B5DHQ51j.js";import"./Label-CODe3zwa.js";import"./ZIndexLayer-DWGlhSed.js";import"./types-WsTRE19v.js";import"./Curve-DZsm4o-J.js";import"./ReactUtils-CXVPwG-V.js";import"./ActivePoints-C5vcU6Ed.js";import"./Dot-7hrVu7_8.js";import"./RegisterGraphicalItemId-BjD0GJz1.js";import"./GraphicalItemClipPath-DvXQ6fJn.js";import"./SetGraphicalItem-j4NHyBYf.js";import"./useAnimationId-D9Wpr36K.js";import"./getRadiusAndStrokeWidthFromDot-I0B4Jd_U.js";import"./graphicalItemSelectors-132llaWu.js";import"./useElementOffset-CU9yJrDm.js";import"./iteratee-Bod8Xpm-.js";import"./Cross-DDNArpcM.js";import"./Rectangle-BCh8wZqF.js";import"./Sector-Doli5igL.js";import"./index-DjmMVEJp.js";import"./ChartSizeDimensions-C9nZfRd3.js";import"./OffsetShower-ZX4tabc8.js";import"./PlotAreaShower-BEMT4keu.js";import"./ErrorBarContext-ADLH_OpK.js";import"./ActiveShapeUtils-CKfXoaq0.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-Tsb3ohUM.js";import"./Symbols-DWUe3itn.js";const xe={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null))),e.createElement(n,{className:"flex-child"},e.createElement(E,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const Ce=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,Ce as __namedExportsOrder,xe as default};
