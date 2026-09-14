import{R as e}from"./iframe-D6i__LoP.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CAx1pIhU.js";import{R as h}from"./zIndexSlice-CyKHeydM.js";import{C as g}from"./ComposedChart-CjSU8WGa.js";import{L as x}from"./Line-vAyDldKH.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CPAx7ill.js";import{T as V}from"./Tooltip-B2sIES0q.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-DBbQlRic.js";import"./Layer-g6kXe5Or.js";import"./resolveDefaultProps-CqzBSPJb.js";import"./Text-hZV3tmbb.js";import"./DOMUtils-DeYJTEnJ.js";import"./isWellBehavedNumber-CluTirfv.js";import"./useId-tMVNWk8Z.js";import"./useBackwardsCompatibleTheme-CQpTINsS.js";import"./Label-CcM-HFI6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cgr5Sbcn.js";import"./index-DMFV_hOu.js";import"./index--kg1cBe0.js";import"./types-BferblG2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cqr2zXs_.js";import"./throttle-DZkWvGbR.js";import"./index-TOqTf9p4.js";import"./index-B0NZAO6k.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DCWzk6aO.js";import"./axisSelectors-LrJn1RIt.js";import"./index-CfSh3_es.js";import"./CartesianChart-SH0Bt_l8.js";import"./chartDataContext-DoSIIG4T.js";import"./CategoricalChart-CQsWyxzZ.js";import"./Curve-BAgXbvIK.js";import"./step-D_yNlVES.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BhOCoOsB.js";import"./useAnimationId-Bi456v-E.js";import"./ActivePoints-BQ7megxl.js";import"./Dot-M_mEsxZK.js";import"./RegisterGraphicalItemId-DMF9sTtn.js";import"./ErrorBarContext-CpDc2JTq.js";import"./GraphicalItemClipPath-C4ZotnNz.js";import"./SetGraphicalItem-B41pEGJW.js";import"./getRadiusAndStrokeWidthFromDot-BXIDSkMw.js";import"./ActiveShapeUtils-p-Z4MyM6.js";import"./useGraphicalItemIdentity-CVzdXzJV.js";import"./useElementOffset-tYvBFPP4.js";import"./uniqBy-DBt7WG7j.js";import"./iteratee-q1Bz0EWx.js";import"./Cross-Dm5OOX8L.js";import"./Rectangle-Cv4A529c.js";import"./util-Dxo8gN5i.js";import"./Sector-CcGdp1iE.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
