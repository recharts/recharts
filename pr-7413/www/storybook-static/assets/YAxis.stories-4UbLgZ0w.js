import{R as t}from"./iframe-C2BX5KlG.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-DyEK7c-9.js";import{R as h}from"./zIndexSlice-CxPEcPAu.js";import{L as A}from"./LineChart-M3CfzZIj.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-IRNWuAYH.js";import{X as f}from"./XAxis-DVvf2cjO.js";import{L as E}from"./Legend-Ce3iB2By.js";import{L as n}from"./Line-DLZXl40V.js";import{T as v}from"./Tooltip-BNcp-BI8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CAfMQs0q.js";import"./CartesianAxis-1gCJxPwk.js";import"./Layer-Y7EAuX4r.js";import"./resolveDefaultProps-BYCxJvcu.js";import"./Text-D33SlXvN.js";import"./DOMUtils-DjP-hpRu.js";import"./isWellBehavedNumber-DmYLFUk5.js";import"./Label-BtHuGICT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DXknjapM.js";import"./index-BGPmBimQ.js";import"./index-COSvD7ew.js";import"./types-Bzm0K4Xv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-u_9WNmNI.js";import"./immer-CvWW5aeq.js";import"./RechartsWrapper-D59koTZo.js";import"./index-mM7HvUIP.js";import"./index-B4ncEIHG.js";import"./axisSelectors-CMoKJGYW.js";import"./d3-scale-CWyzRMoK.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BUqQYDbS.js";import"./chartDataContext-BBtoeQBI.js";import"./CategoricalChart-wPXQ1QrH.js";import"./Symbols-C8818rpd.js";import"./symbol-BrPwpKoT.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DgvALgLL.js";import"./uniqBy-Dndb0Oy8.js";import"./iteratee-KOU-VhL7.js";import"./Curve-skm-derQ.js";import"./step-CaZe8v-k.js";import"./AnimatedItems-a4bz34sF.js";import"./useAnimationId-By3GmLUa.js";import"./ActivePoints-BR22gwdA.js";import"./Dot-MNln9N_X.js";import"./RegisterGraphicalItemId-D-0LsKMM.js";import"./ErrorBarContext-Dxkwh2s-.js";import"./GraphicalItemClipPath-BeTilTZu.js";import"./SetGraphicalItem-BLppYw7V.js";import"./getRadiusAndStrokeWidthFromDot-BpkcLqmS.js";import"./ActiveShapeUtils-8DISroY0.js";import"./Cross-Cr_uS2gb.js";import"./Rectangle-DRmt8yX0.js";import"./Sector-BGIVy27E.js";const Rt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
