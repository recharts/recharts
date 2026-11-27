import{R as r}from"./iframe-BLIo_1nt.js";import{g}from"./utils-ePvtT4un.js";import{T as p}from"./TooltipArgs-Df-PoQrY.js";import{T as a}from"./Tooltip-DrYX7zBw.js";import{R as h}from"./zIndexSlice-DC3TJ2KH.js";import{L as c}from"./LineChart-BO_0ZgEU.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-Op3Vm6R3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-X9B5BzRC.js";import"./index-DzqD25FH.js";import"./resolveDefaultProps-DBbSGEQz.js";import"./get-CjriyByo.js";import"./ZIndexLayer-BZ7iUhzZ.js";import"./throttle-BVtqo_9X.js";import"./useAnimationId-BgYtx5DV.js";import"./useElementOffset-VoZhZIkW.js";import"./uniqBy-D7cU4A4V.js";import"./iteratee-w-RXZ5GP.js";import"./isArguments-yB-y1yaH.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DHKT5KBC.js";import"./axisSelectors-zp31unE3.js";import"./polarAxisSelectors-CTVIJxRd.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-0nS9y-pB.js";import"./index-CO4LKWIG.js";import"./index-BIvaYjey.js";import"./renderedTicksSlice-Bb6Mddqa.js";import"./index-Cvsm1Tm8.js";import"./fillDefinitions-pQA0VntX.js";import"./types-C-m9Hr0T.js";import"./Curve-BVD8Rbav.js";import"./step-LFYZ39d8.js";import"./path-BBMZd4YL.js";import"./Cross-B4AUhU5f.js";import"./Rectangle-D4nL3Ndu.js";import"./util-Dxo8gN5i.js";import"./Sector-B6-NlQbV.js";import"./CartesianChart-DiqGyEKX.js";import"./chartDataContext-CqIvcjot.js";import"./CategoricalChart-DIDmT5Om.js";import"./getRadiusAndStrokeWidthFromDot-DxsyiQVm.js";import"./Layer-BmO--khP.js";import"./dataEntryStyles-B2sIlIGL.js";import"./Label-CFregkfn.js";import"./Text-DGpe4WxS.js";import"./ActivePoints-BBUouWIB.js";import"./Dot-B_Lpp7cN.js";import"./activeStyles-CwggIO5e.js";import"./Symbols-DgGyp4Yg.js";import"./symbol-D8T0ODfo.js";import"./ErrorBarContext-GHF_OtFg.js";import"./SetGraphicalItem-DvFjNtUQ.js";import"./ActiveShapeUtils-wxtxdEJ1.js";import"./useEffectiveDataKey-CLP9K8e-.js";const Tr={argTypes:p,component:a},t={render:s=>{const[n,o]=[600,300];return r.createElement(h,{width:"100%",height:o},r.createElement(c,{width:n,height:o,margin:{top:20,right:20,bottom:20,left:20},data:d},r.createElement(f,{dataKey:"uv"}),r.createElement(a,{...s})))},args:{...g(p),trigger:"hover",shared:!1,useTranslate3d:!1}},Ar=["API"];var e,i,m;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <LineChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <Line dataKey="uv" />
          {/* The target component */}
          <Tooltip {...args} />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    trigger: 'hover',
    shared: false,
    useTranslate3d: false
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{t as API,Ar as __namedExportsOrder,Tr as default};
