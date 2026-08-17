import{R as e}from"./iframe-D_SBmach.js";import{A as r}from"./AreaChart-j_ih6Yn_.js";import{R as o}from"./zIndexSlice-C-84-lKY.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CtMN1VZ-.js";import{X as i}from"./XAxis-DH-ZgwOK.js";import{Y as m}from"./YAxis-DDmw5Iip.js";import{A as s}from"./Area-BmqModuK.js";import{T as p}from"./Tooltip-B3XzVpFR.js";import{L as f}from"./LineChart-l4dUrI0T.js";import{L as x}from"./Line-C9ajzZ_E.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CFoCu-Y8.js";import"./index-rdN2tPCT.js";import"./index-Dl7bNBwv.js";import"./index-cqta4xpR.js";import"./index-B3RrYXmh.js";import"./throttle-Dlx_LjAj.js";import"./get-C2VjdU0L.js";import"./axisSelectors-T3miAVW7.js";import"./resolveDefaultProps-Bvyrx_D_.js";import"./isWellBehavedNumber-CqdfCsRm.js";import"./d3-scale-BqLpL1Tc.js";import"./renderedTicksSlice-D04XWQ7B.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-TtiOfZnr.js";import"./chartDataContext-DBogxY-2.js";import"./CategoricalChart-lLmfaMcS.js";import"./CartesianAxis-BQ5_-jT8.js";import"./Layer-Be605v_j.js";import"./Text-Bw10gxla.js";import"./DOMUtils-DrunKDJC.js";import"./useBackwardsCompatibleTheme-CD7phNhZ.js";import"./Label-CdDqsnQd.js";import"./ZIndexLayer-B6Mf8DJp.js";import"./types-CKo4Bnww.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DZGph_C9.js";import"./useAnimationId-BA2h0Ua8.js";import"./ActivePoints-CURbINes.js";import"./Dot-CVIHEjDA.js";import"./RegisterGraphicalItemId-Cdozmspz.js";import"./GraphicalItemClipPath-D8_vcKpW.js";import"./SetGraphicalItem-BiSwI4Xl.js";import"./getRadiusAndStrokeWidthFromDot-Cq9L4k3r.js";import"./ActiveShapeUtils-CZ0w88RB.js";import"./Curve-Mu286cSN.js";import"./step-DTNf_sWS.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DMdb4hau.js";import"./useElementOffset-DsoUZQYy.js";import"./uniqBy-DSeKXx74.js";import"./iteratee-C0hKcmwL.js";import"./Cross-BsquGNoJ.js";import"./Rectangle-DL8Pps38.js";import"./util-Dxo8gN5i.js";import"./Sector-DVBc4NAA.js";import"./ErrorBarContext-B-lCMwxo.js";const De={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(o,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))),e.createElement(o,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(p,null))))),args:{}},a={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null)))),e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const Pe=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,Pe as __namedExportsOrder,De as default};
