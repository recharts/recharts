import{R as e}from"./iframe-Ba761dAt.js";import{A as r}from"./AreaChart-C9UesLCq.js";import{R as n}from"./zIndexSlice-QfUsSAvl.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-CjVT43kO.js";import{X as i}from"./XAxis-BFSA3F3Y.js";import{Y as m}from"./YAxis-BGJzMLCA.js";import{A as p}from"./Area-D3YXfjEb.js";import{T as s}from"./Tooltip-l28RSMhn.js";import{L as f}from"./LineChart-Cwk38l5K.js";import{L as x}from"./Line-Bm1u625u.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bka_uKoY.js";import"./index-DNu-VFbT.js";import"./index-jmRPS8ks.js";import"./index-CD7Kt9vJ.js";import"./index-CQZXBhnc.js";import"./throttle-DM8vz_S7.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-C9WcFyVD.js";import"./axisSelectors-Cn6pQrFe.js";import"./resolveDefaultProps-BbsZGrBO.js";import"./isWellBehavedNumber-DtdZYAzd.js";import"./d3-scale-MektT9AZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BhhNM2dx.js";import"./chartDataContext-CIdWR6fk.js";import"./CategoricalChart-B2LsRV82.js";import"./CartesianAxis-Dp6wkVSq.js";import"./Layer-B5w5vx75.js";import"./Text-CN68nsih.js";import"./DOMUtils-BwEbS88Q.js";import"./Label-BnOVxmge.js";import"./ZIndexLayer-DN2jzfCT.js";import"./types-0dL2Niha.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-DBRlvqN4.js";import"./useAnimationId-Bb4M1zTw.js";import"./ActivePoints-BxdWxMht.js";import"./Dot-DfAT_SUP.js";import"./RegisterGraphicalItemId-BoJDveOV.js";import"./GraphicalItemClipPath-CD6E6U12.js";import"./SetGraphicalItem-c2dU8YzM.js";import"./getRadiusAndStrokeWidthFromDot-DNi5zXue.js";import"./ActiveShapeUtils-SxPaImaJ.js";import"./Curve-mQomw5g8.js";import"./step-Bh181Pvp.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DdJlLUk9.js";import"./useElementOffset-zcMD2hVj.js";import"./uniqBy-CHlYBrF5.js";import"./iteratee-BskgW_tl.js";import"./Cross-DbO4vA7X.js";import"./Rectangle-Bb2j6FkB.js";import"./util-Dxo8gN5i.js";import"./Sector-DkRqKnrn.js";import"./ErrorBarContext-kfdlWhVC.js";const ke={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const Ke=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,Ke as __namedExportsOrder,ke as default};
