import{R as t}from"./iframe-DlbVoy8b.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BhrY96Pd.js";import{R as l}from"./zIndexSlice-DIPR8J8Q.js";import{C as x}from"./ComposedChart-kpOOzPnf.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D61P4U12.js";import{L as a}from"./Line-BDb9qYvA.js";import{X as c}from"./XAxis-S-cm4cjH.js";import{T as g}from"./Tooltip-Dx6POBvv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Db_JATF8.js";import"./Text-D-UClZ_j.js";import"./resolveDefaultProps-DXzjMp61.js";import"./pageBackground-CUuPx32S.js";import"./ZIndexLayer-bE8wUUDO.js";import"./index-CDdiRPnr.js";import"./index-CPhEmyt7.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DH-8MkIE.js";import"./throttle-DlhUrerR.js";import"./axisSelectors-C1oz2VfT.js";import"./d3-scale-wuSABge9.js";import"./CartesianAxis-xtm5bwXL.js";import"./Layer-Cgk1UHKb.js";import"./types-wgD9JhdB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-GxAdOI9L.js";import"./index-CPt_GVUx.js";import"./index-D-eNMO6C.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D0Cl8XbA.js";import"./index-CIlMrkEO.js";import"./CartesianChart-fxjI_rYy.js";import"./ZIndexPortal-BXiuLmxD.js";import"./CategoricalChart-C4dlmPak.js";import"./LabelList-DZdmLQwZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-6c5uuZ_V.js";import"./useAnimationId-69ly1h0S.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-hcn-O4rR.js";import"./tooltipContext-DqmisGoO.js";import"./dataEntryStyles-CWf0jd4a.js";import"./ErrorBarContext-DTMhIhTa.js";import"./activeStyles-68fYVlFc.js";import"./SetGraphicalItem--R52djyG.js";import"./getZIndexFromUnknown-Mxkab-zw.js";import"./useEffectiveDataKey-Cxmpzb2d.js";import"./omit-D7Zh_glI.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CwM7Cya8.js";import"./step-D9Q180Zj.js";import"./path-DyVhHtw_.js";import"./ActivePoints-nWjJ13Ya.js";import"./Dot-C73t_xwp.js";import"./Symbols-pvCFqWA7.js";import"./symbol-Con-2uFn.js";import"./getRadiusAndStrokeWidthFromDot-BM1c-Ckc.js";import"./useElementOffset-BikB_Nzb.js";import"./uniqBy-dmJ8LW9D.js";import"./iteratee-ZueROYHY.js";import"./Cross-BZ_YBMHg.js";import"./Sector-Ce4Tme9N.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
