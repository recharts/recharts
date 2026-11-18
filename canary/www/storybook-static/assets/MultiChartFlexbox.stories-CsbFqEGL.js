import{R as e}from"./iframe-ESIqq74j.js";import{A as a}from"./AreaChart-7AJeAwl_.js";import{R as r}from"./zIndexSlice-CKvG1btl.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-D9DsUXb8.js";import{X as i}from"./XAxis-DazJCOyK.js";import{Y as m}from"./YAxis-DKsjzmyR.js";import{A as s}from"./Area-BY1odVGc.js";import{T as p}from"./Tooltip-Bp5HtTrN.js";import{L as f}from"./LineChart-wI4ji1Ko.js";import{L as x}from"./Line-BfPK1q22.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CmfK6Aj5.js";import"./resolveDefaultProps-B7R_GNLW.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Dt46-i8H.js";import"./throttle-s6zM-TSz.js";import"./index-CADuzeyv.js";import"./index-BLW9Qo5X.js";import"./polarAxisSelectors-3_x-3ruj.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-RU_yJ5H-.js";import"./index-CfWnO0RN.js";import"./index-BUNu1DhE.js";import"./renderedTicksSlice-mNjnmJLW.js";import"./index-COj7acwZ.js";import"./fillDefinitions-DJ6LDeFQ.js";import"./CartesianChart-C07q_lkj.js";import"./chartDataContext-y_Sj-SgN.js";import"./CategoricalChart-DJa-RrVL.js";import"./CartesianAxis-B_kntHFz.js";import"./Layer-Bde02su5.js";import"./Text-SrX2-qRa.js";import"./ZIndexLayer-C_1IKv4J.js";import"./Label-BX7H8p4m.js";import"./types-CKUWabzj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-DeJPrQyS.js";import"./dataEntryStyles-CU93DU9D.js";import"./ActivePoints-CTIAjKB9.js";import"./Dot-HenRQ4hS.js";import"./activeStyles-rtMeimPT.js";import"./useAnimationId-Fts_Wu3I.js";import"./Symbols-CUdupVmb.js";import"./symbol-DTe8TmzR.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-D7oZPXcp.js";import"./ActiveShapeUtils-C0RxF4ep.js";import"./Curve-DSZOr6BZ.js";import"./step-CinInmIp.js";import"./useEffectiveDataKey-CNiCq0ga.js";import"./useElementOffset-Bi21MMet.js";import"./uniqBy-DLn6pOi-.js";import"./iteratee-Ceo2QOyl.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CFmROkvM.js";import"./Rectangle-CB4eyp-1.js";import"./util-Dxo8gN5i.js";import"./Sector-D-v2ZTMx.js";import"./ErrorBarContext-ckgpu_x8.js";const Pe={component:a},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(r,{width:"100%",className:"flex-child"},e.createElement(a,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))),e.createElement(r,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(p,null))))),args:{}},n={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null)))),e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))))))}},be=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
