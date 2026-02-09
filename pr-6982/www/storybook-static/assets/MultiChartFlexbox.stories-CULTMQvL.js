import{e}from"./iframe-xqabyeMj.js";import{A as r}from"./AreaChart-DJHkBVE6.js";import{R as n}from"./arrayEqualityCheck-8L6pkBib.js";import{C as o}from"./CartesianGrid-BBOEzBe7.js";import{X as m}from"./XAxis-DCnicXeQ.js";import{Y as i}from"./YAxis-DVjLQwct.js";import{A as l}from"./Area-C6UB4u6L.js";import{T as s}from"./Tooltip-EgWC_rlN.js";import{R as f}from"./RechartsHookInspector-CFJUwZ9y.js";import{L as E}from"./LineChart-DCi8I_Bk.js";import{L as x}from"./Line-C_a5crt8.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BiqM6SLb.js";import"./hooks-DUKF9BS0.js";import"./axisSelectors-Dsv016Jw.js";import"./zIndexSlice-D0PgK1Qq.js";import"./resolveDefaultProps-C4CpinzP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-YoieVqbI.js";import"./chartDataContext-99M3a9R_.js";import"./CategoricalChart-5qGPlSyR.js";import"./CartesianAxis-DhN_DQtJ.js";import"./Layer-Bh77GRoo.js";import"./Text-CGJ1V4Sp.js";import"./DOMUtils-C4dT54L9.js";import"./Label-BONDDJIo.js";import"./ZIndexLayer-DT_FpcHY.js";import"./types-B39fGcYg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-DXgolxSe.js";import"./ReactUtils-bWGvhqKE.js";import"./ActivePoints-BaMeOVMK.js";import"./Dot-C1tAaa2s.js";import"./RegisterGraphicalItemId-BRijqKHc.js";import"./GraphicalItemClipPath-BDFMpOfU.js";import"./SetGraphicalItem-B2tkDh1g.js";import"./useAnimationId-Cs8mC2Bw.js";import"./getRadiusAndStrokeWidthFromDot-ZV4TJns9.js";import"./graphicalItemSelectors-D41rnoki.js";import"./useElementOffset-Cr7-bJ23.js";import"./iteratee-C2sEUqfR.js";import"./Cross-rpHVI9wh.js";import"./Rectangle-BnLG2ZKC.js";import"./Sector-BI2kwOQX.js";import"./index-DIiQC_pi.js";import"./ChartSizeDimensions-gwsg2o-R.js";import"./OffsetShower-BIYWKZux.js";import"./PlotAreaShower-BBgrf_OL.js";import"./ErrorBarContext-BxBXv2QU.js";import"./ActiveShapeUtils-CHTxT0Ma.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CzCZCQIg.js";import"./Symbols-Co2bCSmq.js";const Ce={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null))),e.createElement(n,{className:"flex-child"},e.createElement(E,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
