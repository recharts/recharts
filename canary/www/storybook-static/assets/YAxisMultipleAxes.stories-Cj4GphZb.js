import{R as t}from"./iframe-CtzYfaFS.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-IWkh__zP.js";import{R as l}from"./zIndexSlice-CHFLQ-iB.js";import{C as x}from"./ComposedChart-XEkgpTLA.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CP-Z820k.js";import{L as a}from"./Line-BA9hGf2z.js";import{X as c}from"./XAxis-oAw543sJ.js";import{T as g}from"./Tooltip-DogIC3j-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BsiXY17Z.js";import"./CartesianAxis-BA_E2N7m.js";import"./Layer-BYFEOVHG.js";import"./resolveDefaultProps-B4yZFq1_.js";import"./Text-EAXDgmFv.js";import"./DOMUtils-CZaHz23v.js";import"./isWellBehavedNumber-C_JD1Sao.js";import"./Label-vhEl4j2z.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DBCChzpw.js";import"./index-B_3CFrL4.js";import"./index-CS7Z3m5_.js";import"./types-BhOKl2M1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CyXKwvU2.js";import"./immer-5-WksSwG.js";import"./RechartsWrapper-DtAkHf5u.js";import"./index-CQyW4Cl8.js";import"./index-B8ynkf98.js";import"./axisSelectors-C9oTN7aY.js";import"./d3-scale-Dsn_Yuxt.js";import"./CartesianChart-DLLDguMM.js";import"./chartDataContext-CAcvyAd0.js";import"./CategoricalChart-CwCdJGlO.js";import"./tooltipContext-BlURvFRM.js";import"./AnimatedItems-CFTPfFdo.js";import"./useAnimationId-Dat_OdBO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-bPdK07Y6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bjb6cUC6.js";import"./RegisterGraphicalItemId-C98AlHEB.js";import"./ErrorBarContext-Bj7SM4UW.js";import"./GraphicalItemClipPath-DEcca-2A.js";import"./SetGraphicalItem-CIPU0D-S.js";import"./getZIndexFromUnknown-EGCEhs6i.js";import"./graphicalItemSelectors-oXMVx2vT.js";import"./Curve-CEEgN7pC.js";import"./step-BRDo_NJw.js";import"./path-DyVhHtw_.js";import"./ActivePoints-VdjJXov3.js";import"./Dot-DiQjGxU2.js";import"./getRadiusAndStrokeWidthFromDot-DosUFuXZ.js";import"./useElementOffset-DkrRKcsg.js";import"./uniqBy-CBSkEntb.js";import"./iteratee-BJLAzLHV.js";import"./Cross-Dgj9Mdeo.js";import"./Sector-Kex3ri7r.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
