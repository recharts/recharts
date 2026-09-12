import{R as t}from"./iframe-CkRErbX3.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-CAzXCAfe.js";import{R as h}from"./zIndexSlice-DTmbH2kM.js";import{L as A}from"./LineChart-rAAIRHdI.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CwC0PiQW.js";import{X as f}from"./XAxis-B1jTgdYR.js";import{L as E}from"./Legend-DP9QQmLJ.js";import{L as i}from"./Line-DO9_PgIv.js";import{T as v}from"./Tooltip-B3kOWmGC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Cbc3sDLG.js";import"./Text-CcsMLAiM.js";import"./resolveDefaultProps-D0XcYrnY.js";import"./DOMUtils-ysvCMZ9n.js";import"./isWellBehavedNumber-D_Km0wQV.js";import"./useId-BiQAXzmn.js";import"./useBackwardsCompatibleTheme-Z-DwFZxL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-mbz94-CG.js";import"./index-lTKqLNY2.js";import"./index-8q2B2E2Y.js";import"./RechartsWrapper-LX80ZVpP.js";import"./axisSelectors-BQZb9AEv.js";import"./throttle-BUNP2xt_.js";import"./d3-scale-CAyfIE8L.js";import"./index-Cj3PhY3N.js";import"./index-DPOnfHKZ.js";import"./renderedTicksSlice-BTBGPftx.js";import"./index-CHvbSDPi.js";import"./CartesianAxis-BGltcbGd.js";import"./Layer-eVqkjfjk.js";import"./types-ByxJ_946.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D7JoZRAe.js";import"./chartDataContext-C9978EDJ.js";import"./CategoricalChart-BNOSmnxT.js";import"./Symbols-DXiS9O9j.js";import"./symbol-qt5DuKbX.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DggOv2T5.js";import"./uniqBy-BwaEYqQz.js";import"./iteratee-BG9CjH6Z.js";import"./Curve-DD6HoqKB.js";import"./step-ZsLkjyrm.js";import"./AnimatedItems-BXDAeM5O.js";import"./useAnimationId-B20w_W1l.js";import"./ActivePoints-DWOGb-Xm.js";import"./Dot-2hkZUwyy.js";import"./RegisterGraphicalItemId-DwpGnQ-i.js";import"./ErrorBarContext-LdHiwwFE.js";import"./GraphicalItemClipPath-osbFejbO.js";import"./SetGraphicalItem-7qiiWKdg.js";import"./getRadiusAndStrokeWidthFromDot-B41JQ_h1.js";import"./ActiveShapeUtils-B8wUCaOd.js";import"./useGraphicalItemIdentity-kWkqpE_r.js";import"./Cross-ComRXYT8.js";import"./Rectangle-IH7PyD6Z.js";import"./util-Dxo8gN5i.js";import"./Sector-DfkCo5uI.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
