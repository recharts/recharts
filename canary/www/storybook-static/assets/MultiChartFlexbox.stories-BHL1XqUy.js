import{R as e}from"./iframe-DQWQDaPi.js";import{A as r}from"./AreaChart-B6TJ4ETx.js";import{R as o}from"./zIndexSlice-DcHJpvAl.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-D2KU4kw2.js";import{X as i}from"./XAxis-BBBhOkeu.js";import{Y as m}from"./YAxis-C2-Mzga3.js";import{A as p}from"./Area-CmfRADlv.js";import{T as s}from"./Tooltip-DfRUmUhQ.js";import{L as f}from"./LineChart-I8M7GDfe.js";import{L as x}from"./Line-kGMiuUzH.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BYnvhIY5.js";import"./index-BkyhQGGW.js";import"./index-CXa1CePB.js";import"./index-CVzBZnUD.js";import"./index-Boa57nB7.js";import"./throttle-BQvRWZqy.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CuF4kGlO.js";import"./resolveDefaultProps-Booe6JJa.js";import"./isWellBehavedNumber-BYWBnctP.js";import"./d3-scale-CLTv1Y1c.js";import"./renderedTicksSlice-D0V9j1Gj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DeUhDNtd.js";import"./chartDataContext-BGbsBt_h.js";import"./CategoricalChart-BVqvVrz0.js";import"./CartesianAxis-DrD9H6GX.js";import"./Layer-7j8XoA_H.js";import"./Text-C8i9V0Ud.js";import"./DOMUtils-D6N96cFz.js";import"./Label-DuuyKMi1.js";import"./ZIndexLayer-CfwFYr9r.js";import"./types-D4LIC8ZM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CJF-_HuY.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Brr5wTGw.js";import"./useAnimationId-C7lsUvOa.js";import"./ActivePoints-CRS7YZW5.js";import"./Dot-xJkR_k9t.js";import"./RegisterGraphicalItemId-DoLIlFOq.js";import"./graphicalItemIdentity-CCnPSphi.js";import"./SetGraphicalItem-rBiZ9Gct.js";import"./getRadiusAndStrokeWidthFromDot-DsN6vJJI.js";import"./ActiveShapeUtils-BFafhpNl.js";import"./Curve-CR2T-gv2.js";import"./step-C6wof28x.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-X4IgffWK.js";import"./useElementOffset-CLIiDdJ8.js";import"./uniqBy-fSK0oXn5.js";import"./iteratee-DdboyrOE.js";import"./Cross-4l8qkIJQ.js";import"./Rectangle-Cj344d-6.js";import"./util-Dxo8gN5i.js";import"./Sector-CfjfRVeu.js";import"./ErrorBarContext-Ch1rJbNM.js";const Ke={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(o,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(o,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(p,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
