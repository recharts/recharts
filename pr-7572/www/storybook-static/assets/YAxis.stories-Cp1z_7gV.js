import{R as t}from"./iframe-prgBh1Qf.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-CBYYm0_0.js";import{R as h}from"./zIndexSlice-DdjKeJcD.js";import{L as A}from"./LineChart-5EVUS1SR.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-BpI63CWP.js";import{X as f}from"./XAxis-BWvJnYnv.js";import{L as E}from"./Legend-Cvem60oj.js";import{L as n}from"./Line-CWtP-uQX.js";import{T as v}from"./Tooltip-Dv51Ni96.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DyI7y6fg.js";import"./Layer-B4SceqN1.js";import"./resolveDefaultProps-DEZlg4EB.js";import"./Text-XjkeXE_1.js";import"./DOMUtils-B922snu2.js";import"./isWellBehavedNumber-DeolLGU-.js";import"./Label-CpgdF2bt.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Coay8-vh.js";import"./index-Bl_8pcbE.js";import"./index-DznvQCe0.js";import"./types-BLB4Kpk-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C3Oo4Aw2.js";import"./throttle-DhCsYq_l.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-FIpEFVMR.js";import"./index-TRfcR2ow.js";import"./index-p6BXHd-9.js";import"./axisSelectors-HShZFAmb.js";import"./d3-scale-CthO7aNE.js";import"./CartesianChart-EDRdBXz4.js";import"./chartDataContext-BRCxcd-D.js";import"./CategoricalChart-C0JPuI-j.js";import"./Symbols-D7NABao6.js";import"./symbol-Cjo5WqKx.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dz4nWuBf.js";import"./uniqBy-B9Vyigvh.js";import"./iteratee-rSndqGt-.js";import"./Curve-Dg6pMiMi.js";import"./step-DljApQAs.js";import"./AnimatedItems-JyKHnHqe.js";import"./useAnimationId-Dho-yl2L.js";import"./ActivePoints-C6psJDBD.js";import"./Dot-BOonALeI.js";import"./RegisterGraphicalItemId-QOUSEuOJ.js";import"./ErrorBarContext-_HsKWF8T.js";import"./GraphicalItemClipPath-D8U1RFPj.js";import"./SetGraphicalItem-cAeJSBXs.js";import"./getRadiusAndStrokeWidthFromDot-BYQTLLCN.js";import"./ActiveShapeUtils-CCY3sSOl.js";import"./Cross-CjrGhwPB.js";import"./Rectangle-CHjX_Wi4.js";import"./util-Dxo8gN5i.js";import"./Sector-G3Ely8-T.js";const St={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Wt=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Wt as __namedExportsOrder,St as default};
