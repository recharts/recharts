import{R as t}from"./iframe-B7xPXiPl.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-Cu3FI7G-.js";import{R as l}from"./zIndexSlice-DflaePKy.js";import{C as x}from"./ComposedChart-BdsejxH2.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-pP8aiRRj.js";import{L as a}from"./Line-BDZJuxNO.js";import{X as c}from"./XAxis-w-quiWhJ.js";import{T as g}from"./Tooltip-y-2oODya.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-YOyO9lVV.js";import"./Text-BexCT2h6.js";import"./resolveDefaultProps-t98kZJWg.js";import"./ZIndexLayer-7qwpAdIl.js";import"./index-D9RsPAPo.js";import"./index-D5HoT5KN.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BXJXB0Uo.js";import"./throttle-BS8hni_u.js";import"./axisSelectors-Bm0UGi6R.js";import"./d3-scale-CVxlp6F9.js";import"./CartesianAxis-CcCV8fyf.js";import"./Layer-CYZUIq4P.js";import"./types-CQsoFKaQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CrxiGG4Q.js";import"./index-C-x4qMT5.js";import"./index-BSMQz-2O.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BcgQInkA.js";import"./index-v1i9I3dv.js";import"./fillDefinitions-BBy33SnP.js";import"./CartesianChart-BjVCLf26.js";import"./chartDataContext-D0czUVCw.js";import"./CategoricalChart-DFRV2_vj.js";import"./dataEntryStyles-C3moi0Z-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B2b4luYh.js";import"./useAnimationId-Bi0MWfey.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cx93C_x7.js";import"./tooltipContext-BTAT5JL5.js";import"./ErrorBarContext-DfxhnQqe.js";import"./activeStyles-CHc73Nrw.js";import"./SetGraphicalItem-C6Fs49Wr.js";import"./getZIndexFromUnknown-CdI8jeTC.js";import"./useEffectiveDataKey-Bs8MhK-5.js";import"./omit-ZhhexLgu.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CrTz1Ty2.js";import"./step-DxMe6Ez2.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Ij5uM0Pj.js";import"./Dot-GE-iIyp3.js";import"./Symbols-BV4T3Yk8.js";import"./symbol-BKIkK8QI.js";import"./getRadiusAndStrokeWidthFromDot-CdlEB0NM.js";import"./useElementOffset-ryxNmM2c.js";import"./uniqBy-C0NZ23ht.js";import"./iteratee-DojtXyrW.js";import"./Cross-B3a9BUmJ.js";import"./Sector-CHPeYTF4.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
