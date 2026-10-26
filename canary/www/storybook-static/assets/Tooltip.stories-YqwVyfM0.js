import{R as r}from"./iframe-BKSHRT_S.js";import{g}from"./utils-ePvtT4un.js";import{T as p}from"./TooltipArgs-TAq2cD4k.js";import{T as a}from"./Tooltip-DgJfsh0T.js";import{R as h}from"./zIndexSlice-BLeuW80U.js";import{L as c}from"./LineChart-HN7scHuz.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-_a0Ki2Oq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D7MQE7Za.js";import"./index-D-jrioKU.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DcYWqzkb.js";import"./ZIndexLayer-Dc3T9ZED.js";import"./throttle-BkygAiqr.js";import"./useAnimationId-Nyn64y9A.js";import"./useElementOffset-Db2Vff8q.js";import"./uniqBy-BAvd38-h.js";import"./iteratee-Cs7UoLYE.js";import"./isArguments-yB-y1yaH.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BDEQp4gV.js";import"./axisSelectors-8rGbG1Qd.js";import"./polarAxisSelectors-CQ3ogHuY.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-A-Zbe_Tu.js";import"./index-rcRigKCu.js";import"./index-D9GCJXOs.js";import"./renderedTicksSlice-uVEXaARu.js";import"./index-Cjyk5lan.js";import"./types-DNwq_ZGY.js";import"./Curve-LNcUa8Cn.js";import"./step-OqTpatbN.js";import"./path-DyVhHtw_.js";import"./Cross-Cbe5Dlbm.js";import"./Rectangle-MxzM-nYG.js";import"./util-Dxo8gN5i.js";import"./Sector-Byh3bfvn.js";import"./CartesianChart-Bg8a12nJ.js";import"./chartDataContext-vZViOemf.js";import"./CategoricalChart-rdB1CfJb.js";import"./Layer-BzU6Nn69.js";import"./activeStyles-BKkkdbj0.js";import"./Label-DbF58v67.js";import"./Text-B6tKJAid.js";import"./pageBackground-DKWjelca.js";import"./useId-PjG3o87t.js";import"./dataEntryStyles-DoThh5sG.js";import"./ActivePoints-2BgjqPQF.js";import"./Dot-BLeFqc4M.js";import"./RegisterGraphicalItemId-D_NDQyK2.js";import"./ErrorBarContext-DwEbbuob.js";import"./SetGraphicalItem-DaNVol4K.js";import"./getRadiusAndStrokeWidthFromDot-DfUPMR_R.js";import"./ActiveShapeUtils-DPuoYgwg.js";import"./useEffectiveDataKey-B8W36a2Q.js";const Tr={argTypes:p,component:a},t={render:s=>{const[n,o]=[600,300];return r.createElement(h,{width:"100%",height:o},r.createElement(c,{width:n,height:o,margin:{top:20,right:20,bottom:20,left:20},data:d},r.createElement(f,{dataKey:"uv"}),r.createElement(a,{...s})))},args:{...g(p),trigger:"hover",shared:!1,useTranslate3d:!1}},Ar=["API"];var e,i,m;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
