import{R as e}from"./iframe-SqguF_NX.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-P_and3Qh.js";import{R as h}from"./zIndexSlice-BkiV0otE.js";import{C as g}from"./ComposedChart-Dvz2V-iv.js";import{L as x}from"./Line-D3r5tZJE.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-HQIXvxJU.js";import{T as V}from"./Tooltip-1kqVnrO0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-IyngpyO5.js";import"./Layer-DMTzFJJY.js";import"./resolveDefaultProps-BXjF7TxP.js";import"./Text-CGVR5o-9.js";import"./DOMUtils-C7uSFAMW.js";import"./isWellBehavedNumber-BVNp7Lfk.js";import"./useId-DDimChZF.js";import"./useBackwardsCompatibleTheme-Csth7N6u.js";import"./Label-Ln0updaQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-2JAxRQj0.js";import"./index-B3GChKJN.js";import"./index-DZzaZipo.js";import"./types-C4DG-fsm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CMNm7EBg.js";import"./throttle-BK_PPAk1.js";import"./index-GGoi087z.js";import"./index-BzPNjXR5.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DtX1Azw0.js";import"./axisSelectors-zCi_DHLv.js";import"./index-BH7LBhiS.js";import"./CartesianChart-0Tm9s_Qh.js";import"./chartDataContext-Cw_Hfd-o.js";import"./CategoricalChart--bg0gB1r.js";import"./Curve-TumiDsb0.js";import"./step-DI1tw62n.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CVudD1tP.js";import"./useAnimationId-Cnc3ou0l.js";import"./ActivePoints-BdsoqPbh.js";import"./Dot-D7HgwkXZ.js";import"./RegisterGraphicalItemId-B2ssVdOY.js";import"./ErrorBarContext-CKOKE4j7.js";import"./GraphicalItemClipPath-DQVG9W_P.js";import"./SetGraphicalItem-DnieI-cg.js";import"./getRadiusAndStrokeWidthFromDot-C8zV7Km-.js";import"./ActiveShapeUtils-C8315rjX.js";import"./useGraphicalItemIdentity-CEMH6EIi.js";import"./useElementOffset-BfFEQnoo.js";import"./uniqBy-BQBFpjJ7.js";import"./iteratee-qNi8Ps_g.js";import"./Cross-BDK-fWel.js";import"./Rectangle-CjC7DOQ8.js";import"./util-Dxo8gN5i.js";import"./Sector-BwVtv9wk.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
