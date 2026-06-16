import{R as e}from"./iframe-YX8o2v6C.js";import{A as r}from"./AreaChart-RWnJ_CDE.js";import{R as n}from"./zIndexSlice-DdFbRU-_.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-Bm0phJiH.js";import{X as i}from"./XAxis-DQ2uOSag.js";import{Y as m}from"./YAxis-Be6O_CQ7.js";import{A as l}from"./Area-PWLPADPa.js";import{T as s}from"./Tooltip-_pWGf0sw.js";import{L as f}from"./LineChart-C6gMjsOi.js";import{L as x}from"./Line-Dmxs4MTa.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CG6S7igm.js";import"./index-CEZPHdCs.js";import"./index-C3Ly3wbD.js";import"./index-DH-2xtWc.js";import"./index-Cl4YYRbA.js";import"./immer-D9wrmu0j.js";import"./get-BycinDno.js";import"./renderedTicksSlice-CH1AW_i0.js";import"./axisSelectors-D8SjoVzs.js";import"./d3-scale-BBOwGfMu.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-Beo9Ue5G.js";import"./isWellBehavedNumber-BTMdVTVN.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-W4Jk2biF.js";import"./chartDataContext-BjewCl-Q.js";import"./CategoricalChart-D0PZB27U.js";import"./CartesianAxis-CKLUnXwa.js";import"./Layer-BIbmWem6.js";import"./Text-Buo3hKKc.js";import"./DOMUtils-QQafW-5D.js";import"./Label-MzgVsBeP.js";import"./ZIndexLayer-jNA71lIU.js";import"./types-DnEhxp69.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-CRhm6WPg.js";import"./useAnimationId-CqTJac9i.js";import"./ActivePoints-DmjJPaKb.js";import"./Dot-DeMjnZzF.js";import"./RegisterGraphicalItemId-6llrHCrO.js";import"./GraphicalItemClipPath-BF8Vebbu.js";import"./SetGraphicalItem-OjQ_8WxS.js";import"./getRadiusAndStrokeWidthFromDot-wgzhKlDZ.js";import"./ActiveShapeUtils-C75e4XAE.js";import"./Curve-BvJZo-0O.js";import"./step-ChRxg50y.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CBWxv08A.js";import"./useElementOffset-BpEKen9w.js";import"./uniqBy-CkCHcnMU.js";import"./iteratee-ByJ6tARf.js";import"./Cross-BJnrT70C.js";import"./Rectangle-BKZ5Spt-.js";import"./Sector-BEajFiZX.js";import"./ErrorBarContext-BJw7X7Qy.js";const Re={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const ke=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,ke as __namedExportsOrder,Re as default};
