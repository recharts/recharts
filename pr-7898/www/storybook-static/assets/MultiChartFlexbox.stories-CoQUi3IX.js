import{R as e}from"./iframe-BLIo_1nt.js";import{A as a}from"./AreaChart-ChVVtVZy.js";import{R as r}from"./zIndexSlice-DC3TJ2KH.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-D1keZ6zP.js";import{X as i}from"./XAxis-NUWW5fMr.js";import{Y as m}from"./YAxis-B-hKkgmv.js";import{A as s}from"./Area-Dq8FQjpX.js";import{T as p}from"./Tooltip-DrYX7zBw.js";import{L as f}from"./LineChart-BO_0ZgEU.js";import{L as x}from"./Line-Op3Vm6R3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DHKT5KBC.js";import"./resolveDefaultProps-DBbSGEQz.js";import"./get-CjriyByo.js";import"./axisSelectors-zp31unE3.js";import"./throttle-BVtqo_9X.js";import"./index-X9B5BzRC.js";import"./index-DzqD25FH.js";import"./polarAxisSelectors-CTVIJxRd.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-0nS9y-pB.js";import"./index-CO4LKWIG.js";import"./index-BIvaYjey.js";import"./renderedTicksSlice-Bb6Mddqa.js";import"./index-Cvsm1Tm8.js";import"./fillDefinitions-pQA0VntX.js";import"./CartesianChart-DiqGyEKX.js";import"./chartDataContext-CqIvcjot.js";import"./CategoricalChart-DIDmT5Om.js";import"./CartesianAxis-CednQB0X.js";import"./Layer-BmO--khP.js";import"./Text-DGpe4WxS.js";import"./ZIndexLayer-BZ7iUhzZ.js";import"./Label-CFregkfn.js";import"./types-C-m9Hr0T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-DxsyiQVm.js";import"./dataEntryStyles-B2sIlIGL.js";import"./ActivePoints-BBUouWIB.js";import"./Dot-B_Lpp7cN.js";import"./activeStyles-CwggIO5e.js";import"./useAnimationId-BgYtx5DV.js";import"./Symbols-DgGyp4Yg.js";import"./symbol-D8T0ODfo.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-DvFjNtUQ.js";import"./ActiveShapeUtils-wxtxdEJ1.js";import"./Curve-BVD8Rbav.js";import"./step-LFYZ39d8.js";import"./useEffectiveDataKey-CLP9K8e-.js";import"./useElementOffset-VoZhZIkW.js";import"./uniqBy-D7cU4A4V.js";import"./iteratee-w-RXZ5GP.js";import"./isArguments-yB-y1yaH.js";import"./Cross-B4AUhU5f.js";import"./Rectangle-D4nL3Ndu.js";import"./util-Dxo8gN5i.js";import"./Sector-B6-NlQbV.js";import"./ErrorBarContext-GHF_OtFg.js";const Pe={component:a},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(r,{width:"100%",className:"flex-child"},e.createElement(a,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))),e.createElement(r,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(p,null))))),args:{}},n={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null)))),e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))))))}},be=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
