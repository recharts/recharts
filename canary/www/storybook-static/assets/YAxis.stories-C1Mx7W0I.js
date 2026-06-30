import{R as t}from"./iframe-BAw0s5ot.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-o1QSu-GR.js";import{R as h}from"./zIndexSlice-BeH27P2U.js";import{L as A}from"./LineChart-wTqlh64R.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CG-mQCyS.js";import{X as f}from"./XAxis-DLc6krzc.js";import{L as E}from"./Legend-CTPvlbFs.js";import{L as n}from"./Line-DjWgsN1g.js";import{T as v}from"./Tooltip-C9JqWq_X.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CSAr6kNF.js";import"./CartesianAxis-BP8vTRJY.js";import"./Layer-CnD0sOVo.js";import"./resolveDefaultProps-BuFdbqch.js";import"./Text-CHY17Wwg.js";import"./DOMUtils-DRw43MBp.js";import"./isWellBehavedNumber-9WEl6uBx.js";import"./Label-RqhE4qn6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B6NdRg2s.js";import"./index-CjVdCyN5.js";import"./index-BK18-1Z2.js";import"./types-3486df9G.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-lnlzRSDk.js";import"./throttle-CMKSqw9i.js";import"./RechartsWrapper-Bttwz4rr.js";import"./index-B1DwQ2Om.js";import"./index-46sIyfq_.js";import"./axisSelectors-CrQ5YVkn.js";import"./d3-scale-8J52VcxR.js";import"./CartesianChart-qH9nTYaZ.js";import"./chartDataContext-Bg-IfXwk.js";import"./CategoricalChart-BcYU7xxq.js";import"./Symbols-BExFE9NQ.js";import"./symbol-CdA8a2iG.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BFqwe0iW.js";import"./uniqBy-dt3axYWo.js";import"./iteratee-E5lawuru.js";import"./Curve-DDP5uwdK.js";import"./step-BMQa1wmq.js";import"./AnimatedItems-DKynRxAN.js";import"./useAnimationId-D83gTctj.js";import"./ActivePoints-x13vM-lM.js";import"./Dot-DM8ASB1e.js";import"./RegisterGraphicalItemId-BYWDLggr.js";import"./ErrorBarContext-B9tnwNW4.js";import"./GraphicalItemClipPath-CFCGDJ4D.js";import"./SetGraphicalItem-BtUL3que.js";import"./getRadiusAndStrokeWidthFromDot-Dj6bNAvM.js";import"./ActiveShapeUtils-DPtxPHYL.js";import"./Cross-4E-QbQ6H.js";import"./Rectangle-BKTeT_Dl.js";import"./util-Dxo8gN5i.js";import"./Sector-CxvJl0Zv.js";const Rt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
