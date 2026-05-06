import{e as t}from"./iframe-Cj3nIKoJ.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-CPODXTBx.js";import{R as h}from"./arrayEqualityCheck-v-UGwrho.js";import{L as A}from"./LineChart-CW963Ld-.js";import{c as b}from"./Coordinate-geWwP0Ct.js";import{C as f}from"./CartesianGrid-CAP815a3.js";import{X as x}from"./XAxis-BPLVTrG2.js";import{L as E}from"./Legend-DaMZETRD.js";import{L as n}from"./Line-BC8HKYq6.js";import{T as v}from"./Tooltip-4lJytfm3.js";import{R as k}from"./RechartsHookInspector-CgEoNM9X.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-C7qHOnR8.js";import"./Layer-CPT9BEuO.js";import"./resolveDefaultProps-CYnAxRaf.js";import"./Text-CC8Nd2bY.js";import"./DOMUtils-BfkiDds5.js";import"./Label-DlqlafMm.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Vexd0w0T.js";import"./zIndexSlice-8UDJ1IOD.js";import"./immer-CXMyIV6A.js";import"./types-DeBW_iJF.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DXSuE5WB.js";import"./hooks-CnwONrTD.js";import"./axisSelectors-ih1f_cEF.js";import"./d3-scale--Y87SVPH.js";import"./RechartsWrapper-nuhidKGe.js";import"./index-CtKFKGEW.js";import"./CartesianChart-BbEdEZ48.js";import"./chartDataContext-xuwFndC5.js";import"./CategoricalChart-DuiVKTDX.js";import"./Symbols-BXQtgV7c.js";import"./symbol-CzbDhrjP.js";import"./step-D6uncFX6.js";import"./useElementOffset-CYqRjn-o.js";import"./uniqBy-R0Pjiz5J.js";import"./iteratee-C0_-2Haw.js";import"./ReactUtils-QSjTdxzv.js";import"./ActivePoints-C9K5tudt.js";import"./Dot-Dqd07VXK.js";import"./RegisterGraphicalItemId-BGPBjniu.js";import"./ErrorBarContext-CdybRlBm.js";import"./GraphicalItemClipPath-C9-KmWZG.js";import"./SetGraphicalItem-CBRb4w4Y.js";import"./useAnimationId-CBqAdaPb.js";import"./getRadiusAndStrokeWidthFromDot-ZJxzi4-O.js";import"./ActiveShapeUtils-DJRQdkq0.js";import"./isPlainObject-B3a7_XUu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D63r3ZS1.js";import"./Trapezoid-TdPyTlNd.js";import"./Sector-B0okeuxd.js";import"./Curve-DYzz3tk1.js";import"./Cross-Dc_rvD61.js";import"./index-BsChK6M4.js";import"./ChartSizeDimensions-DFfD3d93.js";import"./OffsetShower-YtXoM0wF.js";import"./PlotAreaShower-BLMgNHzI.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,g,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Mt=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Mt as __namedExportsOrder,jt as default};
