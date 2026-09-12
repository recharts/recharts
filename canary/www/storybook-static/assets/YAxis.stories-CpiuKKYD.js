import{R as t}from"./iframe-Bk-N4eh5.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-DOohWhTk.js";import{R as h}from"./zIndexSlice-Cks1L1uQ.js";import{L as A}from"./LineChart-CGVjD4xd.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-Yse31_VQ.js";import{X as f}from"./XAxis-cKkeo31Z.js";import{L as E}from"./Legend-Cet4u6xo.js";import{L as i}from"./Line-C4E-S0qs.js";import{T as v}from"./Tooltip-BSEw8bGY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-QAvV2VO9.js";import"./Text-DZhX5I78.js";import"./resolveDefaultProps-jzV4S5LU.js";import"./DOMUtils-CUQy7sD1.js";import"./isWellBehavedNumber-Du6Kj5-5.js";import"./useId-DXE2NHZ6.js";import"./useBackwardsCompatibleTheme-D_Q-cp9k.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CDXbUJjY.js";import"./index-BJIQUKOl.js";import"./index-B9y8Kqsp.js";import"./RechartsWrapper-CRZxnEvO.js";import"./axisSelectors-gsi5pnh3.js";import"./throttle-DGspa7An.js";import"./d3-scale-CUR5a_d2.js";import"./index-B3QvH7n1.js";import"./index-CeTsENmr.js";import"./renderedTicksSlice-aqmhLMa0.js";import"./index-B5-JQ7_N.js";import"./CartesianAxis-CxuhGA1B.js";import"./Layer-DmcaQ_dN.js";import"./types-j43mBGpT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BKZN7ovI.js";import"./chartDataContext-ypeuzWgT.js";import"./CategoricalChart-CfQ-7jwV.js";import"./Symbols-BG7PWY-3.js";import"./symbol-Dn2jucdW.js";import"./path-DyVhHtw_.js";import"./useElementOffset-g5hoKJqf.js";import"./uniqBy-jCy-kd0v.js";import"./iteratee-CoUURpSM.js";import"./Curve-DMEOHSug.js";import"./step-DpQO_Upn.js";import"./AnimatedItems-4I_eYob_.js";import"./useAnimationId-CXJms9_M.js";import"./ActivePoints-C-zYvbZ2.js";import"./Dot-DLh3Hb31.js";import"./RegisterGraphicalItemId-Cdmmbnos.js";import"./ErrorBarContext-Cph_wYMA.js";import"./GraphicalItemClipPath-CAT_76cH.js";import"./SetGraphicalItem-BzXi6hBa.js";import"./getRadiusAndStrokeWidthFromDot-DmXYl-lA.js";import"./ActiveShapeUtils-Bhki9N6s.js";import"./useGraphicalItemIdentity-BC_MJ-E6.js";import"./Cross-Tsv72TGu.js";import"./Rectangle-PRK7HGFg.js";import"./util-Dxo8gN5i.js";import"./Sector-DPm02ZqN.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: Args) => {
    const width = getWidth(args.width);
    return <ResponsiveContainer width="100%" height={500}>
        <LineChart width={600} height={300} data={coordinateWithValueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis {...args} width={width} />
          <Legend />
          <Line dataKey="y" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(YAxisArgs),
    dataKey: 'pv',
    domain: [0, 300],
    type: 'number',
    allowDataOverflow: true,
    tickMargin: 20,
    angle: 45,
    width: '120',
    label: {
      value: 'The Axis Label',
      position: 'center',
      angle: 90
    }
  }
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,g,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: Args) => {
    const sampleData = [{
      category: 'Product A',
      value: 400,
      target: 450
    }, {
      category: 'Product B',
      value: 300,
      target: 350
    }, {
      category: 'Product C',
      value: 200,
      target: 250
    }, {
      category: 'Product D',
      value: 278,
      target: 300
    }, {
      category: 'Product E',
      value: 189,
      target: 220
    }];
    return <ResponsiveContainer width="100%" height={500}>
        <LineChart data={sampleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis {...args} tick={<CustomYAxisTickWithPadding />} width={100} />
          <Line type="monotone" dataKey="value" stroke="#3498db" name="Actual" />
          <Line type="monotone" dataKey="target" stroke="#e74c3c" strokeDasharray="5 5" name="Target" />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(YAxisArgs),
    padding: {
      top: 25,
      bottom: 35
    },
    width: 100,
    tickMargin: 10
  }
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,Xt as __namedExportsOrder,Mt as default};
