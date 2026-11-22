import{R as e}from"./iframe-CUvNAvus.js";import{A as a}from"./AreaChart-DpKTBCxS.js";import{R as r}from"./zIndexSlice-D-rH8vD1.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-O1nKehQ1.js";import{X as i}from"./XAxis-CM346fVw.js";import{Y as m}from"./YAxis-BY3XsiJB.js";import{A as s}from"./Area-BiL6H6EW.js";import{T as p}from"./Tooltip-Ba60ewZ3.js";import{L as f}from"./LineChart-65MNs1Uv.js";import{L as x}from"./Line-DZZP5hqp.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BjljmlV4.js";import"./resolveDefaultProps-3SUBoYwM.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Xjgkf-2T.js";import"./throttle-CYllgfiW.js";import"./index-Cp_pTOca.js";import"./index-CAWn2Z9i.js";import"./polarAxisSelectors-B2l_kUqX.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CA_D1sKG.js";import"./index-BMOBZiEl.js";import"./index-58JkOBJX.js";import"./renderedTicksSlice-A7Y2iS9L.js";import"./index-BkH-1jYD.js";import"./fillDefinitions-Dr0Z3ytP.js";import"./CartesianChart-cFWvwfAO.js";import"./chartDataContext-CYuQBQZt.js";import"./CategoricalChart-BW_ZnICB.js";import"./CartesianAxis-BL1UgLf5.js";import"./Layer-CoFmyLu_.js";import"./Text-BRc4p81h.js";import"./ZIndexLayer-CPI_Yi1m.js";import"./Label-B7OEZM_6.js";import"./types-CsWgfhSt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-BfiOw2M0.js";import"./dataEntryStyles-C_QXXqcb.js";import"./ActivePoints-d-D6hIRO.js";import"./Dot-Dg1tnWhx.js";import"./activeStyles-DPihfCdA.js";import"./useAnimationId-BneLXqad.js";import"./Symbols-CmJ419_u.js";import"./symbol-CLRUs3HG.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-DRGWCaTd.js";import"./ActiveShapeUtils-Davo8QQp.js";import"./Curve-C_xw8Bh0.js";import"./step-DRuHJRtS.js";import"./useEffectiveDataKey-BAjzW2qT.js";import"./useElementOffset-DyhJv7Tq.js";import"./uniqBy-CzilxMyM.js";import"./iteratee-BTZk3n5k.js";import"./isArguments-yB-y1yaH.js";import"./Cross-C_tBJAja.js";import"./Rectangle-DEfxlhJq.js";import"./util-Dxo8gN5i.js";import"./Sector-ChBmv1Cu.js";import"./ErrorBarContext-C0H1v8By.js";const Pe={component:a},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(r,{width:"100%",className:"flex-child"},e.createElement(a,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))),e.createElement(r,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(p,null))))),args:{}},n={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null)))),e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))))))}},be=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var g,u,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(u=n.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};export{t as MultiChartFlexbox,n as ResponsiveContainerWithFlexbox,be as __namedExportsOrder,Pe as default};
