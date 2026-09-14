import{R as e}from"./iframe-CCZR7NAh.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BRz9nr_h.js";import{R as h}from"./zIndexSlice-RhYtObCh.js";import{C as g}from"./ComposedChart-B5KY41wA.js";import{L as x}from"./Line-ByOfnKwX.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CU88JBPJ.js";import{T as V}from"./Tooltip-gceL_MjA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-DqSvII5H.js";import"./Layer-B2yEt3nd.js";import"./resolveDefaultProps-DBU-kSsr.js";import"./Text-BNhIgYfP.js";import"./DOMUtils-BDfLWNCh.js";import"./isWellBehavedNumber-Csif_Eh7.js";import"./useId-BL2vel-5.js";import"./useBackwardsCompatibleTheme-DIkjfI7E.js";import"./Label-A6NnUU-m.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-RJSSngl5.js";import"./index-tWW1_YSW.js";import"./index-B_5iXp8A.js";import"./types-BX41f3Nu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D9smLeXW.js";import"./throttle-ZP6rSZKd.js";import"./index-CQgQjfRf.js";import"./index-Cn7KliQr.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-wkc56maS.js";import"./axisSelectors-BSioHzmv.js";import"./index-1iFFgL5n.js";import"./CartesianChart-BL5MVgQu.js";import"./chartDataContext-DSMzrBHe.js";import"./CategoricalChart-thtv_Ll2.js";import"./Curve-7ikXqYG-.js";import"./step-CvhyldGl.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C_k0o8_C.js";import"./useAnimationId-DJLlQPal.js";import"./ActivePoints-Dj4SzkHH.js";import"./Dot-CnbUvxwO.js";import"./RegisterGraphicalItemId-U6F3LrJb.js";import"./ErrorBarContext-j9HbImdV.js";import"./GraphicalItemClipPath-eRrs6_re.js";import"./SetGraphicalItem-DoozTt-Y.js";import"./getRadiusAndStrokeWidthFromDot-DBCpafJP.js";import"./ActiveShapeUtils-DgHvx5XO.js";import"./useGraphicalItemIdentity-BWyXW6pi.js";import"./useElementOffset-Dp3BrIi0.js";import"./uniqBy-CvvHfEZU.js";import"./iteratee-9vsqmnl8.js";import"./Cross-DwxM3WoF.js";import"./Rectangle-CQGbjjmX.js";import"./util-Dxo8gN5i.js";import"./Sector-4D-ijm9Z.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
