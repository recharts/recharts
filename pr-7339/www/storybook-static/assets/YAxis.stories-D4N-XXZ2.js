import{e as t}from"./iframe-CiPNgAw4.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-D3BtMUGk.js";import{g as h}from"./arrayEqualityCheck-C6nfogx3.js";import{L as A}from"./LineChart-CEAXiuiV.js";import{a as b}from"./Coordinate-CcdTesrj.js";import{C as f}from"./CartesianGrid-v62u6AaS.js";import{X as x}from"./XAxis-BLKgRQop.js";import{L as E}from"./Legend-JUqJz8EU.js";import{L as n}from"./Line-DcN9XZ8g.js";import{T as v}from"./Tooltip-jRF_hFrM.js";import{R as k}from"./RechartsHookInspector-CVL4J5oe.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CWGiyJPj.js";import"./Layer-tX1B1sjt.js";import"./resolveDefaultProps-BDpBhHr1.js";import"./Text-BwxXBXY0.js";import"./DOMUtils-D_v29T4S.js";import"./Label-C61zhpRD.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D-L4yEZ6.js";import"./zIndexSlice-BxzsaYhB.js";import"./immer-BXEbVIgV.js";import"./types-DpsbB84I.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Bj7nK2mV.js";import"./hooks-BI7NI193.js";import"./axisSelectors-Cy_y_L06.js";import"./d3-scale-CMk2gc8P.js";import"./RechartsWrapper-D7DJEHdB.js";import"./index-DQVpqsS2.js";import"./CartesianChart-BCFleW8G.js";import"./chartDataContext-BajvTs6w.js";import"./CategoricalChart-DbOO-7mB.js";import"./Symbols-CZNQWcFs.js";import"./symbol-DD46dP6C.js";import"./step-DNW2l5aF.js";import"./useElementOffset-BTbIUCG9.js";import"./uniqBy-C_cZU6b-.js";import"./iteratee-Drtbgz-g.js";import"./ReactUtils-2ol7Qocl.js";import"./ActivePoints-9r2oCFw-.js";import"./Dot-DSD9slKq.js";import"./RegisterGraphicalItemId-Cfezvs_M.js";import"./ErrorBarContext-DeoWvLpT.js";import"./GraphicalItemClipPath-KikDG9N5.js";import"./SetGraphicalItem-Cc5PlSKV.js";import"./useAnimationId-ZolSEiin.js";import"./getRadiusAndStrokeWidthFromDot-CjDQOwTJ.js";import"./ActiveShapeUtils-DVoj5wPa.js";import"./isPlainObject-32kxwUzR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DvhSXBPG.js";import"./Trapezoid-DD_RcOCU.js";import"./Sector-Cott3o-2.js";import"./Curve-CIk8sgOv.js";import"./Cross-2PZ7Q5B8.js";import"./index-BVLD_GdP.js";import"./ChartSizeDimensions-BUpN4cof.js";import"./OffsetShower-BX6EEwKB.js";import"./PlotAreaShower-D9cRvfnk.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,g,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
