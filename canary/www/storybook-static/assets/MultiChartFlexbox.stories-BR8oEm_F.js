import{e}from"./iframe-BtpSaGeD.js";import{A as r}from"./AreaChart-CygQA7Fl.js";import{R as n}from"./arrayEqualityCheck-csfjq8mV.js";import{C as o}from"./CartesianGrid-DjzQkRle.js";import{X as m}from"./XAxis-iLH9P-hU.js";import{Y as i}from"./YAxis-Bmepm0jT.js";import{A as l}from"./Area-DLL9_xEj.js";import{T as s}from"./Tooltip-625Ae52e.js";import{R as f}from"./RechartsHookInspector-Dh2n9Wob.js";import{L as E}from"./LineChart-DG6w5e4K.js";import{L as x}from"./Line-Cf2UA-3o.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BQPGXXGO.js";import"./hooks-DULxqo3A.js";import"./axisSelectors-CQvuHlQI.js";import"./zIndexSlice-ydm78BYW.js";import"./resolveDefaultProps-DkARaCDv.js";import"./PolarUtils-5F1_zZA0.js";import"./CartesianChart-2vMAanpf.js";import"./chartDataContext-D1JeIz7Q.js";import"./CategoricalChart-BIOH4Ga_.js";import"./CartesianAxis-B74-p-s1.js";import"./Layer-CYyvuKkx.js";import"./Text-DH63q3ed.js";import"./DOMUtils-CVzw1QbG.js";import"./Label-BOlhuZqt.js";import"./ZIndexLayer-BcDwNHGX.js";import"./types-245F3-IH.js";import"./Curve-BC2lzeAQ.js";import"./ReactUtils-TAFDop8V.js";import"./ActivePoints-Djg9xCE5.js";import"./Dot-BgtKn9fG.js";import"./RegisterGraphicalItemId-CJ_I0CZl.js";import"./GraphicalItemClipPath-CmYuvuXv.js";import"./SetGraphicalItem-CMYrG93h.js";import"./useAnimationId-Be_3bM2l.js";import"./getRadiusAndStrokeWidthFromDot-BgQkEg5F.js";import"./graphicalItemSelectors-CuKPbzwY.js";import"./useElementOffset-BXGnihpP.js";import"./iteratee-C4eAhDSk.js";import"./Cross-BmtGXc1D.js";import"./Rectangle-D3A1KPVj.js";import"./Sector-NNIkOagX.js";import"./index-o2N_x1RI.js";import"./ChartSizeDimensions-9kzbcyaa.js";import"./OffsetShower-DBzvXmYz.js";import"./PlotAreaShower-BzkhZKlK.js";import"./ErrorBarContext-D_YNM0zR.js";import"./ActiveShapeUtils-D3Igja4T.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-xDGlDRMK.js";import"./Symbols-Dt8Khp4u.js";const xe={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(n,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null))),e.createElement(n,{className:"flex-child"},e.createElement(E,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(s,null))))),args:{}},a={render:()=>{const p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null),e.createElement(f,null)))),e.createElement("div",{style:{flex:1}},e.createElement(n,null,e.createElement(r,{data:p,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(m,{dataKey:"name"}),e.createElement(i,null),e.createElement(o,{strokeDasharray:"3 3"}),e.createElement(l,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(s,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
              <RechartsHookInspector />
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
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var u,g,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
                <RechartsHookInspector />
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
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const Ce=["MultiChartFlexbox","ResponsiveContainerWithFlexbox"];export{t as MultiChartFlexbox,a as ResponsiveContainerWithFlexbox,Ce as __namedExportsOrder,xe as default};
