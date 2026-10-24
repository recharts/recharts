import{R as t}from"./iframe-DIZ3O37q.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-DKMrz6bp.js";import{R as h}from"./zIndexSlice-BQzkuVGb.js";import{L as A}from"./LineChart-CRlo8FwJ.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-ssYqflAW.js";import{X as f}from"./XAxis-B7HByjhZ.js";import{L as E}from"./Legend-CAnLgOej.js";import{L as i}from"./Line-DtDR1pHd.js";import{T as v}from"./Tooltip-DcLqp7mQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BKiGyQaq.js";import"./Text-CxShOurV.js";import"./resolveDefaultProps-CZ7A5O_B.js";import"./pageBackground-RtZmpZCV.js";import"./isWellBehavedNumber-C03WQupV.js";import"./useId-JbG4rdAV.js";import"./useBackwardsCompatibleTheme-BOuG0K82.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DpnduxRR.js";import"./index-v0zH_vno.js";import"./index-eN1sdWPw.js";import"./dataEntryStyles-DEoRHL3P.js";import"./axisSelectors-CgxEqo8X.js";import"./throttle-CmJg4BXK.js";import"./d3-scale-BsLoKPkH.js";import"./CartesianAxis-DyfvpSiZ.js";import"./Layer-dog9ZdZ9.js";import"./types-DIw8xebl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-dPbGmcjH.js";import"./index-Cmvub_uM.js";import"./index-ywKEni0y.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DCqN-I2W.js";import"./index-DJHqlgJe.js";import"./CartesianChart-BArvePMg.js";import"./chartDataContext-DHk2uxah.js";import"./CategoricalChart-C-yl_Evz.js";import"./Symbols-D8Nhv3CR.js";import"./symbol-D49ZxeF-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BA2R_9BV.js";import"./uniqBy-CLXI3ykK.js";import"./iteratee-BTyFVxv_.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BKoNYh1Q.js";import"./step-Bx5ie7RH.js";import"./activeStyles-heSOU5tv.js";import"./useAnimationId-1Ju_H0cm.js";import"./ActivePoints-CKzWXL41.js";import"./Dot-CFyjFdrS.js";import"./RegisterGraphicalItemId-CU20DwEk.js";import"./ErrorBarContext-ttnhO46D.js";import"./SetGraphicalItem-BH1Y0jBy.js";import"./getRadiusAndStrokeWidthFromDot-DM7-yOyB.js";import"./ActiveShapeUtils-CU9aD14w.js";import"./useEffectiveDataKey-CsQCtOFi.js";import"./Cross-C52amwue.js";import"./Rectangle-CN_u7Ffv.js";import"./util-Dxo8gN5i.js";import"./Sector-J0pHaKij.js";const Xt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},zt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,zt as __namedExportsOrder,Xt as default};
