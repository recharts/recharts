import{e}from"./iframe-Cn9771Nb.js";import{A as r}from"./AreaChart-Ce7H1tZ7.js";import{g as o}from"./arrayEqualityCheck-D-ixwH56.js";import{p as d}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-GyJpwBAe.js";import{X as m}from"./XAxis-CdGr2Iem.js";import{Y as i}from"./YAxis-TQXh0mQm.js";import{A as l}from"./Area-3KrLFbGc.js";import{T as s}from"./Tooltip-CF355n77.js";import{R as f}from"./RechartsHookInspector-ByD7qz5q.js";import{L as E}from"./LineChart-DWkJXyh3.js";import{L as x}from"./Line-BKe7e15P.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-1z_kIANU.js";import"./index-BoXkF8M8.js";import"./immer-Dn_-MauB.js";import"./hooks-O4XLkxr8.js";import"./axisSelectors-BMVy_6Bx.js";import"./d3-scale-BZXwjMGy.js";import"./zIndexSlice-B5zV17Bd.js";import"./renderedTicksSlice-CwaBKoDv.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B8UuiIR4.js";import"./chartDataContext-DlTJMN40.js";import"./CategoricalChart-Doln_IjV.js";import"./resolveDefaultProps-DDTNdovN.js";import"./CartesianAxis-DUvQ6ZkT.js";import"./Layer-CoWJhcnT.js";import"./Text-Ds1KECTG.js";import"./DOMUtils-CumEt8nf.js";import"./Label-DQheKZVl.js";import"./ZIndexLayer-DUDNhmE-.js";import"./types-BeorWpRA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-qT1eTXpe.js";import"./step-BLbmOldc.js";import"./path-DyVhHtw_.js";import"./ReactUtils-CChdz-3q.js";import"./ActivePoints-bvsEPa1q.js";import"./Dot-D-dqVUjX.js";import"./RegisterGraphicalItemId-BPnyUTiw.js";import"./GraphicalItemClipPath-B_ckz-a6.js";import"./SetGraphicalItem-CgvN0HNW.js";import"./useAnimationId-5N3XsSyx.js";import"./getRadiusAndStrokeWidthFromDot-Cr9kNYBa.js";import"./graphicalItemSelectors-CUYaZkAI.js";import"./useElementOffset-BmhffW7B.js";import"./uniqBy-iZZmpyGq.js";import"./iteratee-DKSJObgo.js";import"./Cross-D8ACR-lS.js";import"./Rectangle-DHVB8KHg.js";import"./Sector-Z_tZKkWO.js";import"./index-CIRzOza-.js";import"./ChartSizeDimensions-BsavwcKk.js";import"./OffsetShower-mfqGnir7.js";import"./PlotAreaShower-DtKJCQsO.js";import"./ErrorBarContext-DTo-1FhF.js";import"./ActiveShapeUtils-CchfY29Y.js";const De={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(o,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null))),e.createElement(o,{className:"flex-child"},e.createElement(E,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null)))),e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const Pe=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,Pe as __namedExportsOrder,De as default};
