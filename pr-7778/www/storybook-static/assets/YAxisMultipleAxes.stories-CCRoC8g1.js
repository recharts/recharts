import{R as t}from"./iframe-D0hbihpw.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-fB5-70kE.js";import{R as l}from"./zIndexSlice-BQR9Og2n.js";import{C as x}from"./ComposedChart-DG9EmM0m.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C9PSmlqz.js";import{L as a}from"./Line-DNABoAU9.js";import{X as c}from"./XAxis-BAOUXnRk.js";import{T as g}from"./Tooltip-PXWDBjYQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CuFmC-Nb.js";import"./Text-CuYqG2IB.js";import"./resolveDefaultProps-Dmu88e8o.js";import"./DOMUtils-pnmg3tR-.js";import"./isWellBehavedNumber-CZhc5lub.js";import"./useId-CqMWBNZ1.js";import"./useBackwardsCompatibleTheme-BB_m6SGU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-J_UAcRhh.js";import"./index-BZ9qdzrn.js";import"./index-Dh99j1-7.js";import"./RechartsWrapper-CXRkLc1K.js";import"./axisSelectors-Va6d-v4h.js";import"./throttle-DvTX4uc0.js";import"./d3-scale-O8h2L0ph.js";import"./index-DrgC61Jv.js";import"./index-8bi5BFX5.js";import"./renderedTicksSlice-CXB8MRbw.js";import"./index-BDFJggKj.js";import"./CartesianAxis-DbFRpkHK.js";import"./Layer-DikASeyh.js";import"./types-C5BTVxoc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-V6lubhpa.js";import"./chartDataContext-DAXrP6D1.js";import"./CategoricalChart-Byua6Cow.js";import"./AnimatedItems-SbRPQVaD.js";import"./useAnimationId-qESP7nT-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C_uu3MYE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-5v_sCHFD.js";import"./tooltipContext-DDBxvAQn.js";import"./RegisterGraphicalItemId-DeHO2KGG.js";import"./ErrorBarContext-BWM6Th1h.js";import"./GraphicalItemClipPath-BlTfPWVo.js";import"./SetGraphicalItem-DqlrOVj_.js";import"./getZIndexFromUnknown-Cgv-iSQS.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DmsrIOc1.js";import"./Curve-ar9QbNVF.js";import"./step-DPrNd-pa.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CEQslcDp.js";import"./Dot-bpGHDnlK.js";import"./getRadiusAndStrokeWidthFromDot-DEVmJr6b.js";import"./useElementOffset-Npapc4qs.js";import"./uniqBy-BS3q8RgG.js";import"./iteratee-kuyUhPZO.js";import"./Cross-CMALfafA.js";import"./Sector-DFu2VDPJ.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
