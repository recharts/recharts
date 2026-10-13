import{R as r}from"./iframe-DuosGyDB.js";import{g}from"./utils-ePvtT4un.js";import{T as p}from"./TooltipArgs-TAq2cD4k.js";import{T as a}from"./Tooltip-BrMBPvou.js";import{R as h}from"./zIndexSlice-Da09UpSD.js";import{L as c}from"./LineChart-xl1viAHd.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-BjQkedG_.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BIKpN8wQ.js";import"./index-CkmA4MDq.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CFaFAnLx.js";import"./useBackwardsCompatibleTheme-EzUoSKUQ.js";import"./isWellBehavedNumber-BR0iKwBs.js";import"./throttle-BFe2F0jb.js";import"./useAnimationId-DZvkGEgW.js";import"./useElementOffset-icNFqDBx.js";import"./uniqBy-Cc00XvmO.js";import"./iteratee-Dr0P3_26.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DqMyJeth.js";import"./axisSelectors-BhFgqUpp.js";import"./d3-scale-BcfysILW.js";import"./index-Bx3uuCHN.js";import"./index-DB6X8Jkp.js";import"./renderedTicksSlice-Bhnw81l8.js";import"./index-C8gr5WFK.js";import"./PolarUtils-CTnnDHZv.js";import"./types-DpRgdAcC.js";import"./Curve-BLnV7n0Y.js";import"./step-BE4SoRR0.js";import"./path-DyVhHtw_.js";import"./Cross-RcbzNpk6.js";import"./Rectangle-xphMqkoD.js";import"./util-Dxo8gN5i.js";import"./Sector-BdKNyDn7.js";import"./ZIndexLayer-B7YuRzj4.js";import"./CartesianChart-BF7NkNru.js";import"./chartDataContext-Fsi0dBi5.js";import"./CategoricalChart-CnszpMMB.js";import"./Layer-kSYl9qai.js";import"./activeStyles-Cx6m_4O3.js";import"./Label-CD5z-ltE.js";import"./Text-ws-7QaY4.js";import"./pageBackground-BOChA0aI.js";import"./useId-5tXA_KMi.js";import"./dataEntryStyles-BoHQtdtS.js";import"./ActivePoints-0tjl7oMt.js";import"./Dot-CVHLTOCE.js";import"./ErrorBarContext-BL5frxgR.js";import"./GraphicalItemClipPath-Bpu4eZkp.js";import"./SetGraphicalItem-Cbz0EDFc.js";import"./getRadiusAndStrokeWidthFromDot-BHE1JVwz.js";import"./ActiveShapeUtils-HElctZzh.js";import"./useEffectiveDataKey-BuRZ7bwL.js";const Tr={argTypes:p,component:a},t={render:s=>{const[n,o]=[600,300];return r.createElement(h,{width:"100%",height:o},r.createElement(c,{width:n,height:o,margin:{top:20,right:20,bottom:20,left:20},data:d},r.createElement(f,{dataKey:"uv"}),r.createElement(a,{...s})))},args:{...g(p),trigger:"hover",shared:!1,useTranslate3d:!1}},Ar=["API"];var e,i,m;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
