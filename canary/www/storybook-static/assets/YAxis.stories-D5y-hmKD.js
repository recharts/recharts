import{R as t}from"./iframe-DyLoEKVT.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-nsTECOPY.js";import{R as h}from"./zIndexSlice-BMJvLT6-.js";import{L as A}from"./LineChart-C_b7mVzM.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-ANxmcrPG.js";import{X as f}from"./XAxis-9OVyrDRG.js";import{L as E}from"./Legend-nAvx1kVW.js";import{L as n}from"./Line-DRaTauJz.js";import{T as v}from"./Tooltip-BTj4vQK0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DowO2FG-.js";import"./CartesianAxis-DVRkpibw.js";import"./Layer-1PJWGF6B.js";import"./resolveDefaultProps-v4--KFNE.js";import"./Text-DbHSmtym.js";import"./DOMUtils-DO9od7PA.js";import"./isWellBehavedNumber-DNtaqKPn.js";import"./Label-Bc99EiAM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DHFxHLUr.js";import"./index-ChIcT5we.js";import"./index-DlqbmUdM.js";import"./types-ChV1_7kb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BqkZndXs.js";import"./immer-BagcJtG2.js";import"./RechartsWrapper--UzxIxEu.js";import"./index-CufWBdFA.js";import"./index-PISW76kq.js";import"./axisSelectors-CnSKWHKt.js";import"./d3-scale-CTXcb0ZT.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BuXwJSrD.js";import"./chartDataContext-DJBEQzNo.js";import"./CategoricalChart-nR7o8SXq.js";import"./Symbols-BgFHj5o9.js";import"./symbol-BzH8IghT.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DniPY9C-.js";import"./uniqBy-YTTRAMug.js";import"./iteratee-KqbZdyCL.js";import"./Curve-aK0jXQoR.js";import"./step-BI2jLazT.js";import"./AnimatedItems-DZ2CDn43.js";import"./useAnimationId-C3XlQNNz.js";import"./ActivePoints-Cgvb9XOf.js";import"./Dot-Cj91nRDm.js";import"./RegisterGraphicalItemId-CalLmt4D.js";import"./ErrorBarContext-CuSWRyRz.js";import"./GraphicalItemClipPath-B_O83OKV.js";import"./SetGraphicalItem-Ve1ljg4L.js";import"./getRadiusAndStrokeWidthFromDot-BLbyixQ6.js";import"./ActiveShapeUtils-DR5RhSUS.js";import"./Cross-mSJJOKzg.js";import"./Rectangle-C19lR5AX.js";import"./Sector-BMTKBdCE.js";const Rt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const St=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,St as __namedExportsOrder,Rt as default};
