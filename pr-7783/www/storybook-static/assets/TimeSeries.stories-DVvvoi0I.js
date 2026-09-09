import{R as e}from"./iframe-DFG5UB_B.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BGV0t6fj.js";import{R as h}from"./zIndexSlice-BfnucyES.js";import{C as g}from"./ComposedChart-DvBb4g9X.js";import{L as x}from"./Line-DbNr04kS.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CVPVhJLx.js";import{T as V}from"./Tooltip-BX_C2Z3k.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-BNuKFBQN.js";import"./Layer-CTQ0XvXO.js";import"./resolveDefaultProps-BatIk00Z.js";import"./Text-CeNXkw59.js";import"./DOMUtils-BhwdevaN.js";import"./isWellBehavedNumber-LLrASzdJ.js";import"./useId-s4zjQZaU.js";import"./useBackwardsCompatibleTheme-CQyv0Qul.js";import"./Label-BlYeas0v.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BhF6Z1GT.js";import"./index-CvfO2mCp.js";import"./index-DZ38vEa6.js";import"./types-DcAH2tiO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BAoPBO0b.js";import"./throttle-8CKkbV4u.js";import"./index-DPl35esh.js";import"./index-CFKpipae.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-B6oLib6N.js";import"./axisSelectors-THUDlcaK.js";import"./index-Bx8tOa6m.js";import"./CartesianChart-CyJda43K.js";import"./chartDataContext-CMj3DEnW.js";import"./CategoricalChart-DoM1RUNO.js";import"./Curve-D7P2ouTL.js";import"./step-Cpq8yTJq.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DaUsoCvA.js";import"./useAnimationId-DtAgjjoV.js";import"./ActivePoints-DcPgsYfH.js";import"./Dot-DokBxO_D.js";import"./RegisterGraphicalItemId-7hocZulP.js";import"./ErrorBarContext-SVRkM6ha.js";import"./GraphicalItemClipPath-Dn5pirN6.js";import"./SetGraphicalItem-B5Jco2Ub.js";import"./getRadiusAndStrokeWidthFromDot-BtIvPgrq.js";import"./ActiveShapeUtils-BBhCvNS_.js";import"./useGraphicalItemIdentity-D1Y6AxtT.js";import"./useElementOffset-CESdl8j9.js";import"./uniqBy-BvJpBkfI.js";import"./iteratee-CT_szyVB.js";import"./Cross-B0BI2ykV.js";import"./Rectangle-DvysmnTh.js";import"./util-Dxo8gN5i.js";import"./Sector-Cn30566z.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
