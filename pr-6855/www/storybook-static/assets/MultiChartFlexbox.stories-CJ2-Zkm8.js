import{e}from"./iframe-Da-M2bw_.js";import{A as r}from"./AreaChart-DWT1acCJ.js";import{R as n}from"./arrayEqualityCheck-Bu1fao9w.js";import{C as o}from"./CartesianGrid-BeDGJ5q1.js";import{X as m}from"./XAxis-CFyYvsY3.js";import{Y as i}from"./YAxis-u8ljMyRk.js";import{A as l}from"./Area-DtzELEmu.js";import{T as s}from"./Tooltip-BswLKPO9.js";import{R as f}from"./RechartsHookInspector-DN6fpuiF.js";import{L as E}from"./LineChart-CyyU7Yr_.js";import{L as x}from"./Line-gMk0LR0R.js";import{p as d}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BUepfen4.js";import"./hooks-CxpugqLJ.js";import"./axisSelectors-B_bauGo8.js";import"./zIndexSlice-CMfC5ktf.js";import"./resolveDefaultProps-BfdPYxPL.js";import"./PolarUtils-vOe5pdek.js";import"./CartesianChart-DRzmZtVl.js";import"./chartDataContext-Cwbia7-m.js";import"./CategoricalChart-Cqbm4wFz.js";import"./CartesianAxis-CVwu7qOc.js";import"./Layer-DzGabtm5.js";import"./Text-BD5t_Wg6.js";import"./DOMUtils-CQPgEqmB.js";import"./Label-C4t1wGEU.js";import"./ZIndexLayer-C6AjQfxY.js";import"./types-D0tWu2Rj.js";import"./Curve-D038hXOJ.js";import"./ReactUtils-y3IAuRLl.js";import"./ActivePoints-C9RhecIz.js";import"./Dot-Ce2UrvYJ.js";import"./RegisterGraphicalItemId-Bh4GNlAN.js";import"./GraphicalItemClipPath-qobx4hps.js";import"./SetGraphicalItem-BUDso82t.js";import"./useAnimationId-DW2lwLzx.js";import"./getRadiusAndStrokeWidthFromDot-tRJ-ENaO.js";import"./graphicalItemSelectors-CZita_ka.js";import"./useElementOffset-CJciGcgD.js";import"./iteratee-BEvwa0tL.js";import"./Cross-O6OvgL9I.js";import"./Rectangle-BDQYy-QO.js";import"./Sector-CemvM92K.js";import"./index-CVXS9YKr.js";import"./ChartSizeDimensions-BESje7nE.js";import"./OffsetShower-OU7b25r_.js";import"./PlotAreaShower--pkErmR4.js";import"./ErrorBarContext-CgzPxaLF.js";import"./ActiveShapeUtils-Dg-wD9Xs.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-Dm562TU6.js";import"./Symbols-0qrr4MxV.js";const xe={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null))),e.createElement(n,{className:"flex-child"},e.createElement(E,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
