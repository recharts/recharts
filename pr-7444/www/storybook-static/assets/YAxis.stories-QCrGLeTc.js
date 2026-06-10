import{R as t}from"./iframe-DHxweIO9.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-Cdmy20fv.js";import{R as h}from"./zIndexSlice-oAGhcyxs.js";import{L as A}from"./LineChart-IliHyqHz.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-DHwHIsHn.js";import{X as f}from"./XAxis-by-9KJMG.js";import{L as E}from"./Legend-C4UURlGM.js";import{L as n}from"./Line-i-hk5T1C.js";import{T as v}from"./Tooltip-B0F9H5iz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C0Lt804T.js";import"./CartesianAxis-CVNW_DPG.js";import"./Layer-Ck33QkwT.js";import"./resolveDefaultProps-BFfik0lP.js";import"./Text-r1UAkK_M.js";import"./DOMUtils-CB5jUme8.js";import"./isWellBehavedNumber-zbgy0N68.js";import"./Label-Hedzo6WI.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-tleOLVC8.js";import"./index-BPm8HOAZ.js";import"./index-D2s_06CJ.js";import"./types-D6mO4BwK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D0SVQkh2.js";import"./immer-LtTlQghk.js";import"./RechartsWrapper-B1v1VArt.js";import"./index-Cen9NMit.js";import"./index-1DHoilgY.js";import"./axisSelectors-BtfV9moc.js";import"./d3-scale-8GVIzX8d.js";import"./string-B6fdYHAA.js";import"./CartesianChart-FIs-jkte.js";import"./chartDataContext-BdeADzKD.js";import"./CategoricalChart-DTsRp_4F.js";import"./Symbols-C8MLAtkU.js";import"./symbol-DF_ydgJ-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CQBXWs47.js";import"./uniqBy-DNFOk9_5.js";import"./iteratee-B_9DEeWv.js";import"./Curve-BHn37Kg3.js";import"./step-CNOFf0Gl.js";import"./AnimatedItems-CcOK_yF7.js";import"./useAnimationId-CKZSDbra.js";import"./ActivePoints-BYS8rjGP.js";import"./Dot-CpI4OitO.js";import"./RegisterGraphicalItemId-D9fHh-dg.js";import"./ErrorBarContext-Dm9lKBps.js";import"./GraphicalItemClipPath-DNkFii-i.js";import"./SetGraphicalItem-BdtIdG4P.js";import"./getRadiusAndStrokeWidthFromDot-DwZJEjHx.js";import"./ActiveShapeUtils-BTTuLaTo.js";import"./Cross-o6lG5OwG.js";import"./Rectangle-eYgp7t5C.js";import"./Sector-CiNQMXQF.js";const Rt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
