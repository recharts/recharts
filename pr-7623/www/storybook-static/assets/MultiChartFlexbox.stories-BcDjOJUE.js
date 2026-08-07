import{R as e}from"./iframe-B67xakaW.js";import{A as r}from"./AreaChart-DCasfG_z.js";import{R as o}from"./zIndexSlice-D0TzJ1fR.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CG4D2kRB.js";import{X as i}from"./XAxis-FKOR1g-7.js";import{Y as m}from"./YAxis-CgnEOw1P.js";import{A as p}from"./Area-DVqKNuHn.js";import{T as s}from"./Tooltip-BYC_rTBi.js";import{L as f}from"./LineChart-B3h4IzZd.js";import{L as x}from"./Line-DV865J21.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cx8TqoHO.js";import"./index-CvOnsJ-w.js";import"./index-Dk_c5Xjv.js";import"./index-C636565A.js";import"./index-hWCiHkWI.js";import"./throttle-BKrvbeAi.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DXeKf5vs.js";import"./resolveDefaultProps-B29-kufx.js";import"./isWellBehavedNumber-ClgfPGEs.js";import"./d3-scale-DAYedkSi.js";import"./renderedTicksSlice-B7Sc1x4H.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BLDHGv8m.js";import"./chartDataContext-CfIiS_I3.js";import"./CategoricalChart-DgP4TH9i.js";import"./CartesianAxis-CPVS6EgD.js";import"./Layer-DydnlLJq.js";import"./Text-Cz97PcLA.js";import"./DOMUtils-B9paDAsr.js";import"./Label-DIs948ZI.js";import"./ZIndexLayer-Bldiyv4x.js";import"./types-CBHC2Uao.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CKqExDZQ.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Dlexmd5j.js";import"./useAnimationId-pFv40dAf.js";import"./ActivePoints-C6zOCKUI.js";import"./Dot-DQCUJJj2.js";import"./RegisterGraphicalItemId-Ci2aQjFq.js";import"./GraphicalItemClipPath-CLLzWZH-.js";import"./SetGraphicalItem-D_jFiRTP.js";import"./graphicalItemIdentity-7Y65Hlf3.js";import"./ActiveShapeUtils-i_QMKwre.js";import"./Curve-us0lQGQS.js";import"./step-BtzpbeJ-.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DZTsQwib.js";import"./useElementOffset-D4Es4Bm1.js";import"./uniqBy-C2sdVxSX.js";import"./iteratee-qHco-Mg-.js";import"./Cross-Bw_v2_li.js";import"./Rectangle-eKfFzmse.js";import"./util-Dxo8gN5i.js";import"./Sector-2_svyaSR.js";import"./ErrorBarContext--xCAx9GD.js";const Ke={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(o,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(o,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const De=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,De as __namedExportsOrder,Ke as default};
