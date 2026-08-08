import{R as t}from"./iframe-D_g4F33S.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BeSx8PLK.js";import{R as l}from"./zIndexSlice-qk_W91LH.js";import{C as x}from"./ComposedChart-DYa_RjMP.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-QEZabl8x.js";import{L as a}from"./Line-BbKfURZ_.js";import{X as c}from"./XAxis-D0V-DbQJ.js";import{T as g}from"./Tooltip-a8WCufWp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-mwDIEaZu.js";import"./Text-dC5bBnrz.js";import"./resolveDefaultProps-BMNeBin1.js";import"./DOMUtils-D15rvujY.js";import"./isWellBehavedNumber-DbmSi19e.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CBemJ52Z.js";import"./index-bqb3oNhY.js";import"./index-DU-EG8Ox.js";import"./RechartsWrapper-CPYm6CLL.js";import"./index-DjQlfIyB.js";import"./index-RMAjGoM1.js";import"./throttle-C8ol7TbU.js";import"./axisSelectors-BTeU-Lnf.js";import"./d3-scale-CQkgQnoX.js";import"./renderedTicksSlice-9yA5jGLk.js";import"./CartesianAxis-eoFvh8zn.js";import"./Layer-CZAafMyB.js";import"./types-E4fDsamD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DEVDikLO.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C30ToINU.js";import"./chartDataContext-abfC3Iow.js";import"./CategoricalChart-Dp3h3G-T.js";import"./tooltipContext-D8mn9KMy.js";import"./AnimatedItems-5bCKGYgm.js";import"./useAnimationId-F97RPKrS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CYZZnEwA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-AssYUN6s.js";import"./RegisterGraphicalItemId-S9qjeBvy.js";import"./ErrorBarContext-j16ccEsR.js";import"./GraphicalItemClipPath-Ce5CheJW.js";import"./SetGraphicalItem-MWcQtcPB.js";import"./getZIndexFromUnknown-C2HFYVxN.js";import"./graphicalItemSelectors-DvjkEvTx.js";import"./Curve-DHe5_cmM.js";import"./step-BcJtBoCB.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CjAssZ9T.js";import"./Dot-DT1eTQrx.js";import"./getRadiusAndStrokeWidthFromDot-Bjf5_Zne.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-D_pF2ZzE.js";import"./uniqBy-CTUiS_hF.js";import"./iteratee-D3RgNIdT.js";import"./Cross-CUxwAD3n.js";import"./Sector-B-A7-pZw.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Mt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Mt as __namedExportsOrder,Kt as default};
