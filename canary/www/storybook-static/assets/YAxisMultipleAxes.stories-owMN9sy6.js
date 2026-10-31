import{R as t}from"./iframe-DrMLBoK_.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-T-2mqgRO.js";import{R as l}from"./zIndexSlice-BAbfq_sX.js";import{C as x}from"./ComposedChart-BJO1Ycdb.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BNvh1H9V.js";import{L as a}from"./Line-z8Hwxd3e.js";import{X as c}from"./XAxis-Cwv8s30V.js";import{T as g}from"./Tooltip-DLFB31JE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CJPkFebi.js";import"./Text-CCAk-006.js";import"./resolveDefaultProps-C_WQkFbi.js";import"./DOMUtils-BZ5XTJuP.js";import"./ZIndexLayer-FCgsPrev.js";import"./index-CTLiCJTk.js";import"./index-IA7JdDoU.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D2k-junf.js";import"./throttle-2Z3dikKo.js";import"./axisSelectors-CrOsHKKG.js";import"./d3-scale-BHx6I7KL.js";import"./CartesianAxis-CAiEG9fo.js";import"./Layer-DCQ6NbAd.js";import"./types-CTebeEOM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DjVfoptE.js";import"./index-BsgdmWE6.js";import"./index-DwcArmuD.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CXZPsywz.js";import"./index-pQjQ56sZ.js";import"./CartesianChart-Dzyi-du7.js";import"./ZIndexPortal-Cic8j-2O.js";import"./CategoricalChart-CZtxZv4h.js";import"./LabelList-UL5cxJwa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CtabDI_D.js";import"./useAnimationId-C1T3lckw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BLsOucL8.js";import"./tooltipContext-D2cAZChc.js";import"./dataEntryStyles-DS33QVkf.js";import"./themeFill-BkM1x4hA.js";import"./ErrorBarContext-BbnyXFhx.js";import"./activeStyles-CN6y9IyH.js";import"./SetGraphicalItem-u5R4LaUm.js";import"./getZIndexFromUnknown-sTX5wSbO.js";import"./useEffectiveDataKey-Cmfpsn2Q.js";import"./omit-C66T4-Z8.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CDb7Uz9B.js";import"./step-LAZCFOYn.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BqSYU_4H.js";import"./Dot-m22IE0o6.js";import"./Symbols-BVUslZbl.js";import"./symbol-DCFwQ7z8.js";import"./getRadiusAndStrokeWidthFromDot-e3lSPE0u.js";import"./useElementOffset-DSzIxfUE.js";import"./uniqBy-Wo4a7xMg.js";import"./iteratee-C7O8kT_z.js";import"./Cross-PCIn7ixO.js";import"./Sector-CAabEh96.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
