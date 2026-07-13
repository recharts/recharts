import{R as e}from"./iframe-DeA6Jpe3.js";import{A as r}from"./AreaChart-DOM9RO9K.js";import{R as n}from"./zIndexSlice-BC0f17EQ.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as o}from"./CartesianGrid-ca-mWNXH.js";import{X as i}from"./XAxis-CWYh7d5o.js";import{Y as m}from"./YAxis-5Hp6S-YS.js";import{A as l}from"./Area-BOQzqkTs.js";import{T as s}from"./Tooltip-DhmV0FMM.js";import{L as f}from"./LineChart-DX8Xurzd.js";import{L as x}from"./Line-DX7Ebcir.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B64-BdAv.js";import"./index-DH7_6A6k.js";import"./index-_OzwQHli.js";import"./index-COu95pDD.js";import"./index-Cgi5iiaO.js";import"./throttle-CrUA5muc.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BS64flHf.js";import"./axisSelectors-D1wvQQnO.js";import"./resolveDefaultProps-CSkrQNmh.js";import"./isWellBehavedNumber-QapkByze.js";import"./d3-scale-BpDmqGQL.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BM30Ht3L.js";import"./chartDataContext-DUEOLv6k.js";import"./CategoricalChart-BGS1Syzx.js";import"./CartesianAxis-D6SDyMBH.js";import"./Layer-EcnCd1Gq.js";import"./Text-D2SjxJqk.js";import"./DOMUtils-Bt_ISucd.js";import"./Label-DxF7lRqe.js";import"./ZIndexLayer-B9FDBqTJ.js";import"./types-Dc_zINiL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-C9_zvyTE.js";import"./useAnimationId-DmZXjvo1.js";import"./ActivePoints-DXrZqI9p.js";import"./Dot-BnJj13Wl.js";import"./RegisterGraphicalItemId-DYqiPt6w.js";import"./GraphicalItemClipPath-BPKm-IHy.js";import"./SetGraphicalItem-D9c-Ll1Q.js";import"./getRadiusAndStrokeWidthFromDot-JO35KbEr.js";import"./ActiveShapeUtils-DhlcDB3a.js";import"./Curve-hairJGsw.js";import"./step-cipjXRUD.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BdqD8UUE.js";import"./useElementOffset-CIvcKMtZ.js";import"./uniqBy-UFmqCWmo.js";import"./iteratee-syIuvkdt.js";import"./Cross-CJOqCG5U.js";import"./Rectangle-CQJfdyEy.js";import"./util-Dxo8gN5i.js";import"./Sector-aK76tY29.js";import"./ErrorBarContext-DdrEBPjm.js";const Re={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))),e.createElement(n,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
