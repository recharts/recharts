import{R as e}from"./iframe-sd_X8bAz.js";import{A as r}from"./AreaChart-DdcBzgu8.js";import{R as o}from"./zIndexSlice-DbArepHL.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-KVy2ar0o.js";import{X as i}from"./XAxis-DWsFwFJj.js";import{Y as m}from"./YAxis-C2ggo4hE.js";import{A as s}from"./Area-BmNM8kYZ.js";import{T as p}from"./Tooltip-RRKnfJED.js";import{L as f}from"./LineChart-yaZLgq45.js";import{L as x}from"./Line-8sAwTSHM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DMlKTkdw.js";import"./index-zmb0gbyG.js";import"./index-DZ983I6W.js";import"./index-DQHeaU2g.js";import"./index-B4I4wfZA.js";import"./throttle-2gz7Gpxn.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DssFyd1_.js";import"./resolveDefaultProps-bueunEgf.js";import"./isWellBehavedNumber-D-FFIB2G.js";import"./d3-scale-C-KqVawR.js";import"./renderedTicksSlice-BaC5qXRY.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BDbsS6IT.js";import"./chartDataContext-B6Fdiy4W.js";import"./CategoricalChart-Cqi_maR-.js";import"./CartesianAxis-BBBNYOHg.js";import"./Layer-D66jRg_t.js";import"./Text-BxgHUkK-.js";import"./DOMUtils-koMSW9nS.js";import"./useId-D6dXaFl8.js";import"./useBackwardsCompatibleTheme-CIVTy4Me.js";import"./Label-BPdPutID.js";import"./ZIndexLayer-DVaVbWL-.js";import"./types-BfsDnBCz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-B5JWoVFx.js";import"./useAnimationId-iF8C_Nzd.js";import"./ActivePoints-Bx0X1g0d.js";import"./Dot-JozVq32O.js";import"./RegisterGraphicalItemId-1K3qw_t6.js";import"./GraphicalItemClipPath-CoP9pSKP.js";import"./SetGraphicalItem-DN7uVNhv.js";import"./getRadiusAndStrokeWidthFromDot-Bvk01GUs.js";import"./ActiveShapeUtils-CFyZWuxn.js";import"./Curve-VFw1Cyl5.js";import"./step-SkwaH9zG.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-rD-nYf5o.js";import"./useElementOffset-B-jJqGvW.js";import"./uniqBy-C6azmfxA.js";import"./iteratee-BS0tXoF4.js";import"./Cross-C91zbasP.js";import"./Rectangle-BTlwV0De.js";import"./util-Dxo8gN5i.js";import"./Sector-BIc-uq9p.js";import"./ErrorBarContext-CETtzPB_.js";const Pe={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(o,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))),e.createElement(o,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(p,null))))),args:{}},a={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null)))),e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const be=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,be as __namedExportsOrder,Pe as default};
