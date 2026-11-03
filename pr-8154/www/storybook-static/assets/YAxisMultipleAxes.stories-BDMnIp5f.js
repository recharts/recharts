import{R as t}from"./iframe-KBGw0lyx.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-Bs_I5rsO.js";import{R as l}from"./zIndexSlice-C-xeYs44.js";import{C as x}from"./ComposedChart-Bx7E-Vpt.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DsbIDVGG.js";import{L as a}from"./Line-CeC9baUi.js";import{X as c}from"./XAxis-ok9FfAxX.js";import{T as g}from"./Tooltip-DP-3tpm7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B98IZvVF.js";import"./Text-CUmSOGFL.js";import"./resolveDefaultProps-kFtONSvK.js";import"./DOMUtils-plVJ3xwD.js";import"./ZIndexLayer-BNAbNRIQ.js";import"./index-Db-AaMwI.js";import"./index-EF7AV5IJ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BG_XMkul.js";import"./throttle-BjGPoFhQ.js";import"./axisSelectors-CEjenqk6.js";import"./d3-scale-CcHRZEud.js";import"./CartesianAxis-ZwQJNcj_.js";import"./Layer-Du8JdPXM.js";import"./types-BKfndQQ3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DZXVMt_J.js";import"./index-DVqUNpUf.js";import"./index-BSom5vyx.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CcktegzB.js";import"./index-DTImZAxQ.js";import"./fillDefinitions-CJnfgvsJ.js";import"./CartesianChart-DKU75UBR.js";import"./ZIndexPortal-CLKXKALr.js";import"./CategoricalChart-ByWn7DI3.js";import"./LabelList-DauBxbTi.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D6IFr9AJ.js";import"./useAnimationId-BAlrP4Yc.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CKM6jbR2.js";import"./tooltipContext-WqOTR5lK.js";import"./dataEntryStyles-DZFUHLoQ.js";import"./ErrorBarContext-CuOMSbvd.js";import"./activeStyles-C4Umy--5.js";import"./SetGraphicalItem-eP4w3gdT.js";import"./getZIndexFromUnknown-Dio5RCnZ.js";import"./useEffectiveDataKey-ycUHTwlw.js";import"./omit-CTvoxP2o.js";import"./isArguments-yB-y1yaH.js";import"./Curve-r2B0eutN.js";import"./step-BbiIrKZ6.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CGR7NTAp.js";import"./Dot-BPCwUkSx.js";import"./Symbols-BD33ILFX.js";import"./symbol-BJV2xy5y.js";import"./getRadiusAndStrokeWidthFromDot-Cv-NOSS3.js";import"./useElementOffset-BvetthWK.js";import"./uniqBy-T0ABjzXx.js";import"./iteratee-CiEcwEiU.js";import"./Cross-BxQg94Oo.js";import"./Sector-BaKJKGrn.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
