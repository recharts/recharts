import{R as e}from"./iframe-DaQbgwSM.js";import{A as a}from"./AreaChart-Ckl3UwZ-.js";import{R as r}from"./zIndexSlice-GtlpPVbP.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-BaDvzjUn.js";import{X as i}from"./XAxis-Dwi6B5gb.js";import{Y as m}from"./YAxis-DJNfgCPe.js";import{A as s}from"./Area-q4rvccic.js";import{T as p}from"./Tooltip-BQZ3CNSI.js";import{L as f}from"./LineChart-gOl0_kkK.js";import{L as x}from"./Line-BQic4Z5R.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BMsAihAT.js";import"./resolveDefaultProps-C03kBNGe.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DiPrK3uM.js";import"./throttle-D86JN7dt.js";import"./index-fR-dYqAy.js";import"./index-pcae8h2v.js";import"./isWellBehavedNumber-CF6bOuRt.js";import"./d3-scale-C28Mr6C_.js";import"./index-B9PrDzsD.js";import"./index-C_QxJfjv.js";import"./renderedTicksSlice-BBiwG0aF.js";import"./index-DVT6pdU4.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DWDjryZ8.js";import"./chartDataContext-C5kvJ464.js";import"./CategoricalChart-D9AKOXtI.js";import"./CartesianAxis-Dd7LPnIK.js";import"./Layer-Dy562RhS.js";import"./Text-6pf8QaaJ.js";import"./DOMUtils-B-aaPPhR.js";import"./useId-C9TE6S2g.js";import"./useBackwardsCompatibleTheme-jIXNHWAs.js";import"./Label-BMF2NwhK.js";import"./ZIndexLayer-e1DF3LHV.js";import"./types-BrU75Oof.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BlzsOhEO.js";import"./useAnimationId-BjF9VJ68.js";import"./ActivePoints-oBCdZOS2.js";import"./Dot-C7TPiZG8.js";import"./RegisterGraphicalItemId-Clsr70g_.js";import"./GraphicalItemClipPath-D0ATNOOi.js";import"./SetGraphicalItem-HJSDm9m5.js";import"./getRadiusAndStrokeWidthFromDot-3aetdsat.js";import"./ActiveShapeUtils-CrKaudC-.js";import"./Curve-_5Fn1COl.js";import"./step-C8sn29Vk.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CLitx1ml.js";import"./useElementOffset-D2-2eyIk.js";import"./uniqBy-Bqm10COm.js";import"./iteratee-CZBTSYNz.js";import"./Cross-DSdbtvKr.js";import"./Rectangle-C77_7Qyp.js";import"./util-Dxo8gN5i.js";import"./Sector-BTnt08UU.js";import"./ErrorBarContext-B2kb74U-.js";const Pe={component:a},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(r,{width:"100%",className:"flex-child"},e.createElement(a,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))),e.createElement(r,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(p,null))))),args:{}},n={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null)))),e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))))))}},be=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
