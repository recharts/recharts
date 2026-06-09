import{R as t}from"./iframe-Dn7uhoyL.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-BfFk8v58.js";import{R as h}from"./zIndexSlice-CVPi3ttj.js";import{L as A}from"./LineChart-CfNnjFeB.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-NxJU1X0z.js";import{X as f}from"./XAxis-CM-PbRui.js";import{L as E}from"./Legend-VoyKXnXv.js";import{L as n}from"./Line-Dj80C8Yq.js";import{T as v}from"./Tooltip-CmBrx--3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BWJg7GwY.js";import"./CartesianAxis-BFlE9wN2.js";import"./Layer-0_0lU0ce.js";import"./resolveDefaultProps-CdaF0R9o.js";import"./Text-Coel_U_-.js";import"./DOMUtils-DMf79wlK.js";import"./isWellBehavedNumber-CWLsfq8q.js";import"./Label-BkxCdWVF.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DWtyWVlG.js";import"./index-Cy5HZ0nr.js";import"./index-CSiJtewq.js";import"./types-Bnw4G7MR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C-NsLko8.js";import"./immer-jPz9tOCf.js";import"./RechartsWrapper-BxRk2Gdp.js";import"./index-Bq40lsYa.js";import"./index-DD0InOiJ.js";import"./axisSelectors-CcayQcVn.js";import"./d3-scale-Cgmb0cG0.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BTxfKGwU.js";import"./chartDataContext-CxM1m1he.js";import"./CategoricalChart-vFRRVoOy.js";import"./Symbols-D0L3NZVE.js";import"./symbol-Sc7zzrJc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BS2jKIzO.js";import"./uniqBy-BegxbEUU.js";import"./iteratee-BQ8u-VLy.js";import"./Curve-dLTkUQDk.js";import"./step-DtaB3Afi.js";import"./AnimatedItems-BOxaWbpG.js";import"./useAnimationId-DyeHQUGR.js";import"./ActivePoints-BJJpASAl.js";import"./Dot-BCY87lLt.js";import"./RegisterGraphicalItemId-DNlA1n-y.js";import"./ErrorBarContext-8EwqaTjA.js";import"./GraphicalItemClipPath-Ml5Lm9cP.js";import"./SetGraphicalItem-r_k8Lha2.js";import"./getRadiusAndStrokeWidthFromDot-BlZL4Q4R.js";import"./ActiveShapeUtils-dzMUbVJX.js";import"./Cross-D5X-79vf.js";import"./Rectangle-C7YkQMq8.js";import"./Sector-D2HI9UwR.js";const Rt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
