import{R as e}from"./iframe-DsrT6Igl.js";import{A as r}from"./AreaChart-dd5zXwb5.js";import{R as o}from"./zIndexSlice-h68Ml9Fg.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-X4YDn1xd.js";import{X as i}from"./XAxis-B8sGkbA_.js";import{Y as m}from"./YAxis-CZhK_UtL.js";import{A as s}from"./Area-BsieHZGb.js";import{T as p}from"./Tooltip-CH2R-UVQ.js";import{L as f}from"./LineChart-D_1kgV6-.js";import{L as x}from"./Line-Co0or1gx.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CSffRmp6.js";import"./index-TmgrHUX7.js";import"./index-yiXd6Pb-.js";import"./index-CcGDpKo8.js";import"./index-CFQPgMx1.js";import"./throttle-CKywVGzs.js";import"./get-C2VjdU0L.js";import"./axisSelectors-wSA8VE6u.js";import"./resolveDefaultProps-B9PzJr_D.js";import"./isWellBehavedNumber-BKc-Hacq.js";import"./d3-scale-xIAfNFu1.js";import"./renderedTicksSlice-CMKIM6y2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BZwpOQ8g.js";import"./chartDataContext-CfBgcaN6.js";import"./CategoricalChart-CEyUxV14.js";import"./CartesianAxis-BXcmAp6r.js";import"./Layer-DLKGrOO6.js";import"./Text-C481n1OT.js";import"./DOMUtils-C9ccNhGG.js";import"./useBackwardsCompatibleTheme-DXRl_guv.js";import"./Label-Vp0epMck.js";import"./ZIndexLayer-CReW--vZ.js";import"./types-Dr4WwlRr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BHAzNwyg.js";import"./useAnimationId-B6Rv0dv4.js";import"./ActivePoints-BFA4rG7L.js";import"./Dot-B2h-3AQs.js";import"./RegisterGraphicalItemId-Bitjrotw.js";import"./GraphicalItemClipPath-acoCHMXA.js";import"./SetGraphicalItem-vfAWovt3.js";import"./getRadiusAndStrokeWidthFromDot-CeZkjRIS.js";import"./ActiveShapeUtils-ETIvX2m5.js";import"./Curve-BpJvhb6R.js";import"./step-CipQ0fCR.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-WSGANWYu.js";import"./useElementOffset-KJy6JXTO.js";import"./uniqBy-CcAT-JF8.js";import"./iteratee-Ch_bSXv9.js";import"./Cross-DdS7YOJT.js";import"./Rectangle-BTeUrZeI.js";import"./util-Dxo8gN5i.js";import"./Sector-DqkrMSqs.js";import"./ErrorBarContext-CvpDkEE-.js";const De={component:r},t={render:()=>e.createElement(e.Fragment,null,e.createElement("p",null,"Resize the window to test ResponsiveContainer"),e.createElement("div",{className:"flex-parent"},e.createElement(o,{width:"100%",className:"flex-child"},e.createElement(r,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))),e.createElement(o,{className:"flex-child"},e.createElement(f,{data:d,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(x,{type:"monotone",dataKey:"amt",stroke:"orange"}),e.createElement(p,null))))),args:{}},a={render:()=>{const l=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];return e.createElement("div",{style:{height:"100%",width:"100%",margin:0}},e.createElement("div",{style:{display:"flex",flexDirection:"row",height:"200px"}},e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null)))),e.createElement("div",{style:{flex:1}},e.createElement(o,null,e.createElement(r,{data:l,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(i,{dataKey:"name"}),e.createElement(m,null),e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(p,null))))))}};var c,v,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
