import{e as t}from"./iframe-KzgC6yl3.js";import{O as p}from"./OffsetShower-CrK-LA7q.js";import{X as a}from"./hooks-Bk-p3SZZ.js";import{g as s}from"./arrayEqualityCheck-CI6mjpz-.js";import{C as n}from"./ComposedChart-Bck7I3Sx.js";import{p as f}from"./Page-DPte-9pC.js";import{L as h}from"./Line-BcSuBwlL.js";import{X as d}from"./XAxis-CQ-aN71n.js";import{Y as g}from"./YAxis-Dll4Gv0X.js";import{L as c}from"./Legend-M7WNhHxK.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-DC6_U8Aq.js";import"./immer-BD-tkhpl.js";import"./axisSelectors-BGTsJTqw.js";import"./d3-scale-CYshLe_K.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DbdijU9i.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DlAfZ1fX.js";import"./index-D1VqXYN0.js";import"./zIndexSlice-CoKEHAdo.js";import"./renderedTicksSlice-jEvY63xF.js";import"./CartesianChart-B-Y1gwjz.js";import"./chartDataContext-DWNsgPih.js";import"./CategoricalChart-BntpVIm6.js";import"./Curve-Q6mWCHhh.js";import"./types-eUgvlmUM.js";import"./step-BvMApuT3.js";import"./path-DyVhHtw_.js";import"./Layer-LeweOpyN.js";import"./ReactUtils-CwLFTC_n.js";import"./Label-DkRj53y4.js";import"./Text-DMdLrMxb.js";import"./DOMUtils-CBtmXe9D.js";import"./ZIndexLayer-B24S8uuv.js";import"./ActivePoints-CV8SIXKH.js";import"./Dot-DYstLEu7.js";import"./RegisterGraphicalItemId-C-ghpo4L.js";import"./ErrorBarContext-Ch4fukf7.js";import"./GraphicalItemClipPath-fwgnm59t.js";import"./SetGraphicalItem-D3MvL0nb.js";import"./useAnimationId-Djb8H1Ge.js";import"./getRadiusAndStrokeWidthFromDot-0pa1p6Pi.js";import"./ActiveShapeUtils-C7hoslI5.js";import"./CartesianAxis-IwDruP1d.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BtWNFVjV.js";import"./symbol-BfUw2Tqo.js";import"./useElementOffset-DQ7gwspq.js";import"./uniqBy-7QKyZwf-.js";import"./iteratee-XWXks4So.js";const dt={title:"API/hooks/useOffset",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},e={name:"useOffset",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:f,margin:r.margin},t.createElement(h,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(c,null),t.createElement(p,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'useOffset',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <OffsetShower />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["UseOffset"];export{e as UseOffset,gt as __namedExportsOrder,dt as default};
