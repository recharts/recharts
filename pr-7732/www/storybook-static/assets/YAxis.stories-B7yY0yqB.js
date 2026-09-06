import{R as t}from"./iframe-DEExurmE.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-jXESqwAs.js";import{R as h}from"./zIndexSlice-BGV3a2M2.js";import{L as A}from"./LineChart-lq6gyI5r.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CgrPUP3p.js";import{X as f}from"./XAxis-DlU7zrsS.js";import{L as E}from"./Legend-B-vxIPtA.js";import{L as n}from"./Line-CmBtfFLK.js";import{T as v}from"./Tooltip-BmufVtsv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BoesgQTr.js";import"./Text-DlL7Kh0g.js";import"./resolveDefaultProps-BcKMyFDK.js";import"./DOMUtils-DiHJPz-Q.js";import"./isWellBehavedNumber-h6OQjVbf.js";import"./useId-BEPz2e1p.js";import"./useBackwardsCompatibleTheme-DNIYdIZM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DsOTHSzU.js";import"./index-D05g3ibA.js";import"./index-DSqfHUGS.js";import"./RechartsWrapper-BERQZkXB.js";import"./axisSelectors-B3HyN164.js";import"./throttle-D7dQEHKF.js";import"./d3-scale-Bb2cyBTe.js";import"./index-D4ICS-Fc.js";import"./index-BzthVEqH.js";import"./renderedTicksSlice-By6AytUE.js";import"./index-DRipnBKQ.js";import"./CartesianAxis-BAF_XLat.js";import"./Layer-Bb6nRq1I.js";import"./types-D0GbM314.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Cucr_Qkz.js";import"./chartDataContext-lhhxrqB4.js";import"./CategoricalChart-DNtGewyR.js";import"./Symbols-CvdOzUou.js";import"./symbol-Df6LD2PS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Docjled6.js";import"./uniqBy-DCAZgwHa.js";import"./iteratee-2zI7IteD.js";import"./Curve-CHcEH7zY.js";import"./step-DlHRUAQd.js";import"./AnimatedItems-BsILchAj.js";import"./useAnimationId-BnI4HmeK.js";import"./ActivePoints-3uqjFngE.js";import"./Dot-BMqykIFL.js";import"./RegisterGraphicalItemId-CZwjt8x7.js";import"./ErrorBarContext-DvbJvmom.js";import"./GraphicalItemClipPath-BG1GR_PS.js";import"./SetGraphicalItem-DexHK8W5.js";import"./getRadiusAndStrokeWidthFromDot-Qb57Gwlz.js";import"./ActiveShapeUtils-CrsX7S50.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-B0Tl7X5K.js";import"./Rectangle-CVS7WkKL.js";import"./util-Dxo8gN5i.js";import"./Sector-D3xBaB61.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Xt=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Xt as __namedExportsOrder,Mt as default};
