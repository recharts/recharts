import{R as e}from"./iframe-CChz1bjN.js";import{A as a}from"./AreaChart-CqkXx7fC.js";import{R as r}from"./zIndexSlice-J8dqmnLP.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-CS5NuRyi.js";import{X as i}from"./XAxis-Dz7Mu1Ti.js";import{Y as m}from"./YAxis-D3lxiiSv.js";import{A as s}from"./Area-dAD1JGRV.js";import{T as p}from"./Tooltip-BMykeu_V.js";import{L as f}from"./LineChart-Bgn1sNPZ.js";import{L as x}from"./Line-Bf8JTt31.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ChebgGg6.js";import"./resolveDefaultProps-DJguzPnh.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Bb5mJC8T.js";import"./throttle-DthdhVSw.js";import"./index-CoE7QQC7.js";import"./index-CtYYpEHs.js";import"./isWellBehavedNumber-PtazZpkz.js";import"./d3-scale-DDBYxdkW.js";import"./index-CFolhqr8.js";import"./index-By2IEA6Z.js";import"./renderedTicksSlice-CR60wYV2.js";import"./index-DDJfRyTp.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DkExCOrE.js";import"./chartDataContext-QAaM8qFu.js";import"./CategoricalChart-9EjbSGzt.js";import"./CartesianAxis-DfCGaEVk.js";import"./Layer-CvQSqWng.js";import"./Text-BrAnNoDm.js";import"./DOMUtils--GcIornt.js";import"./useId-K9oYYmyx.js";import"./useBackwardsCompatibleTheme-BGpxY7da.js";import"./Label-BPWxH0ZN.js";import"./ZIndexLayer-CPJzWnIR.js";import"./types-7thkXqxr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BIr5SWwF.js";import"./useAnimationId-q2i8nWUT.js";import"./ActivePoints-CNZPQxVC.js";import"./Dot-BKha21me.js";import"./RegisterGraphicalItemId-Bv9eLHhO.js";import"./GraphicalItemClipPath-Dod_0DGM.js";import"./SetGraphicalItem-N_7Gn5e1.js";import"./getRadiusAndStrokeWidthFromDot-BWutJIdQ.js";import"./ActiveShapeUtils-DRMRiarj.js";import"./Curve-QJYhnBl8.js";import"./step-BINpEDE3.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DNZCCG3V.js";import"./useElementOffset-DnV8f39A.js";import"./uniqBy-CPev9fIs.js";import"./iteratee-Bo1K-GJU.js";import"./Cross-DBaaGir1.js";import"./Rectangle-DohuQVgo.js";import"./util-Dxo8gN5i.js";import"./Sector-B3gLyYgB.js";import"./ErrorBarContext-DOiMkOOX.js";const Pe={component:a},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(r,{width:"100%",className:"flex-child"},e.createElement(a,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))),e.createElement(r,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(p,null))))),args:{}},n={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null)))),e.createElement("div",{style:{flex:1}},e.createElement(r,null,e.createElement(a,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))))))}},be=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
